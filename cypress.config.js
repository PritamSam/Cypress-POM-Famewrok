const { defineConfig } = require("cypress");
const prodConfig = require("./config/prod.env.json");
const { allureCypress } = require("allure-cypress/reporter");
const dayjs = require("dayjs");

const runFolder = dayjs().format("YYYY-MM-DD_HH-mm-ss");
const fs = require("fs");
const path = require("path");


module.exports = defineConfig({
    video: true,

    screenshotOnRunFailure: true,

    trashAssetsBeforeRuns: false,

    screenshotsFolder: `cypress/screenshots/${runFolder}`,

    videosFolder: `cypress/videos/${runFolder}`,

    reporter: "mochawesome",

    reporterOptions: {
        reportDir: "reports/mochawesome",
        overwrite: false,
        html: false,
        json: true
    },
    e2e: {
        baseUrl: prodConfig.baseUrl,
        
        setupNodeEvents(on, config) {

            on("task", {
            writeLog(message) {

            const logDir = path.join("logs", runFolder);

            if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
            }

            fs.appendFileSync(
            path.join(logDir, "execution.log"),
            `${new Date().toISOString()} - ${message}\n`
            );

            return null;
        }
        });

            allureCypress(on, config, {
                resultsDir: `reports/allure-results`
            });

            return config;
        }
    }
});
