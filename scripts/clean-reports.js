const fs = require("fs");
const path = require("path");

const folders = [
    "reports",
    "logs",
    "cypress/screenshots",
    "cypress/videos"
];

folders.forEach((folder) => {

    const fullPath = path.resolve(folder);

    if (fs.existsSync(fullPath)) {

        fs.readdirSync(fullPath).forEach((item) => {

            const itemPath = path.join(fullPath, item);

            fs.rmSync(itemPath, {
                recursive: true,
                force: true
            });
        });

        console.log(`Cleaned contents of: ${fullPath}`);
    }
});
