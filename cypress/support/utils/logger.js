class Logger {

    static info(message) {
        cy.log(`INFO: ${message}`);
        cy.task("writeLog", `INFO: ${message}`);
    }

    static success(message) {
        cy.log(`SUCCESS: ${message}`);
        cy.task("writeLog", `SUCCESS: ${message}`);
    }

    static error(message) {
        cy.log(`ERROR: ${message}`);
        cy.task("writeLog", `ERROR: ${message}`);
    }

    static separator() {
        cy.task("writeLog", "====================================");
    }
}

export default Logger;