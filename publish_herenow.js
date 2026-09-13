const fs = require('fs');
const path = require('path');

// CLI Arguments
const args = process.argv.slice(2);
let targetSlug = 'rising-lasso-t9ge';
let targetDir = path.join(__dirname, 'prototype2');

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) {
        targetSlug = args[i + 1];
        i++;
    } else if (args[i] === '--dir' && args[i + 1]) {
        targetDir = path.resolve(args[i + 1]);
        i++;
    }
}

const apiKey = process.env.HERE_NOW_API_KEY;
if (!apiKey) {
    console.error('ERROR: HERE_NOW_API_KEY environment variable is not set.');
    process.exit(1);
}

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html': return 'text/html; charset=utf-8';
        case '.css': return 'text/css; charset=utf-8';
        case '.js': return 'text/javascript; charset=utf-8';
        case '.mjs': return 'text/javascript; charset=utf-8';
        case '.json': return 'application/json';
        case '.svg': return 'image/svg+xml';
        case '.webp': return 'image/webp';
        case '.png': return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        case '.ico': return 'image/x-icon';
        case '.mp4': return 'video/mp4';
        case '.webm': return 'video/webm';
        case '.woff': return 'font/woff';
        case '.woff2': return 'font/woff2';
        case '.ttf': return 'font/ttf';
        case '.otf': return 'font/otf';
        case '.txt': return 'text/plain; charset=utf-8';
        default: return 'application/octet-stream';
    }
}

function getAllFiles(dirPath, arrayOfFiles = [], baseDir = dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles, baseDir);
        } else if (entry.isFile()) {
            const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
            arrayOfFiles.push({
                fullPath,
                relativePath,
                size: fs.statSync(fullPath).size
            });
        }
    }

    return arrayOfFiles;
}

async function publish() {
    try {
        console.log(`====================================================`);
        console.log(`  here.now Deployer`);
        console.log(`  Target Directory : ${targetDir}`);
        console.log(`  Target Slug      : ${targetSlug || '(auto-generate new slug)'}`);
        console.log(`====================================================\n`);

        if (!fs.existsSync(targetDir)) {
            throw new Error(`Target directory does not exist: ${targetDir}`);
        }

        const filesList = getAllFiles(targetDir);
        console.log(`Found ${filesList.length} files to deploy.`);

        const filePayloads = filesList.map(f => ({
            path: f.relativePath,
            size: f.size,
            contentType: getMimeType(f.fullPath)
        }));

        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        };

        const publishEndpoint = targetSlug
            ? `https://here.now/api/v1/publish/${targetSlug}`
            : `https://here.now/api/v1/publish`;
        const publishMethod = targetSlug ? 'PUT' : 'POST';

        console.log(`Initiating publish session via ${publishMethod} ${publishEndpoint}...`);
        const initRes = await fetch(publishEndpoint, {
            method: publishMethod,
            headers,
            body: JSON.stringify({ files: filePayloads })
        });

        if (!initRes.ok) {
            const errBody = await initRes.text();
            throw new Error(`Publish init failed [${initRes.status}]: ${errBody}`);
        }

        const initData = await initRes.json();
        const { slug, siteUrl, upload } = initData;

        console.log(`Publish session initialized successfully:`);
        console.log(`  Slug       : ${slug}`);
        console.log(`  Site URL   : ${siteUrl}`);
        console.log(`  Version ID : ${upload.versionId}`);
        console.log(`  Uploads    : ${upload.uploads.length} files pending\n`);

        // Upload files concurrently in batches of 6
        const uploadQueue = upload.uploads;
        const concurrency = 6;
        let uploadedCount = 0;
        let totalBytes = 0;

        async function uploadItem(item) {
            const localFile = filesList.find(f => f.relativePath === item.path);
            if (!localFile) {
                throw new Error(`Local file not found for path: ${item.path}`);
            }

            const fileBuffer = fs.readFileSync(localFile.fullPath);
            const contentType = getMimeType(localFile.fullPath);

            const uploadRes = await fetch(item.url, {
                method: item.method || 'PUT',
                headers: {
                    'Content-Type': contentType,
                    ...(item.headers || {})
                },
                body: fileBuffer
            });

            if (!uploadRes.ok) {
                const errText = await uploadRes.text();
                throw new Error(`Upload failed for ${item.path} [${uploadRes.status}]: ${errText}`);
            }

            uploadedCount++;
            totalBytes += fileBuffer.length;
            const pct = Math.round((uploadedCount / uploadQueue.length) * 100);
            process.stdout.write(`\rUploading files: [${uploadedCount}/${uploadQueue.length}] (${pct}%) - ${item.path}`);
        }

        for (let i = 0; i < uploadQueue.length; i += concurrency) {
            const batch = uploadQueue.slice(i, i + concurrency);
            await Promise.all(batch.map(uploadItem));
        }

        console.log(`\n\nAll ${uploadedCount} files uploaded (${(totalBytes / 1024 / 1024).toFixed(2)} MB).`);
        console.log(`Finalizing deployment version ${upload.versionId}...`);

        const finalizeRes = await fetch(upload.finalizeUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({ versionId: upload.versionId })
        });

        if (!finalizeRes.ok) {
            const errText = await finalizeRes.text();
            throw new Error(`Finalize failed [${finalizeRes.status}]: ${errText}`);
        }

        const finalizeData = await finalizeRes.json();

        console.log(`\n====================================================`);
        console.log(`  🎉 DEPLOYMENT SUCCESSFUL!`);
        console.log(`  Live URL : ${siteUrl}`);
        console.log(`  Status   : ${finalizeData.status || 'live'}`);
        console.log(`====================================================\n`);

    } catch (err) {
        console.error(`\n❌ Deployment Failed:`, err.message);
        process.exit(1);
    }
}

publish();
