# Cypress-POM-Famewrok
This repository describes Cypress POM Automation Framework

Pre-requesites - 
```
npm install cypress --save-dev
npx cypress open
npm install --save-dev mochawesome
npm install --save-dev mochawesome-merge
npm install --save-dev mochawesome-report-generator
npm install --save-dev allure-cypress allure-commandline
```
```
To Run this project , run below command in terminal-
npm run test:search
or
npm run cypress
To Genearte and view report -
npm run allure:generate
npm run allure:open
To Delete Screenshots/Vidoes/allure-report/logs
npm run clean
```

Project Overflow -
```
npx cypress run / npx cypress open
        ↓
cypress.config.js loads configuration
        ↓
support/e2e.js executes (global setup)
        ↓
custom commands from commands.js loaded
        ↓
spec files in cypress/e2e/ scanned
        ↓
test script executes (Mocha/BDD)
        ↓
beforeEach / hooks triggered
        ↓
fixture data loaded (cypress/fixtures)
        ↓
Page Object Model (POM) methods called
        ↓
utils layer executed
   ├── Logger (logs execution steps)
   ├── productUtils (business logic)
   └── helper functions
        ↓
Cypress commands executed
   ├── cy.visit()
   ├── cy.get()
   ├── cy.type()
   ├── cy.click()
        ↓
Browser actions executed (Chrome/Electron/Edge)
        ↓
Assertions executed (expect/should)
        ↓
Test results generated
        ↓
Artifacts captured:
   ├── logs (console + logger output)
   ├── screenshots (on failure / manual)
   ├── videos (test execution recording)
   ├── reports/
   │     ├── mochawesome/
   │     └── allure-results/
   └── cypress artifacts folder
        ↓
Report generation step
   ├── mochawesome-merge
   ├── mochawesome-report-generator
   └── allure generate
        ↓
Final output:
   ├── HTML Reports
   ├── Allure Dashboard
   └── Execution Summary

   ```
