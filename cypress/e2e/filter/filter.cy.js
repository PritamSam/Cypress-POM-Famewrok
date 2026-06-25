import FilterPage from "../../pages/FilterPage";
import Logger from "../../support/utils/logger";

describe("Filter Menu Validation", () => {

    beforeEach(() => {
        
        cy.visit("/");

        Logger.info("Navigated to Flipkart");

        cy.closeFlipkartPopup();
    });

    it('should validate all menu options from fixture', () => {

    Logger.info("Validating menu options from fixture");
    cy.fixture('FilterMenuData').then((data) => {
      FilterPage.verifyMenuItemsVisible(data.menuOptions);
    });

    Logger.success("All menu options validated successfully");
  });
})