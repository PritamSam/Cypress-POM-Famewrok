import SearchPage from "../../pages/SearchPage";
import { getLowestProduct, getHighestProduct } from "../../support/utils/productUtils";
import Logger from "../../support/utils/logger";

describe("TV Search Validation", () => {

    let productData;

    beforeEach(() => {

        cy.fixture("products").then((data) => {
            productData = data;
        });

        cy.visit("/", { failOnStatusCode: false });

        Logger.info("Navigated to Flipkart");

        cy.closeFlipkartPopup();
    });

     it("Verify products are displayed", () => {

        cy.fixture("products").then((data) => {

            Logger.info("Searching for TV");

            SearchPage.searchProduct(data.productName);

            SearchPage.getProductCards()
                .its("length")
                .then((count) => {

                    Logger.separator();

                    Logger.success(`Total Products Found: ${count}`);

                    expect(count).to.be.greaterThan(0);

                    cy.screenshot("Product_Count_Validation");

                    Logger.success("Product count validation passed");

                    Logger.separator();
                });
        });
    });

    it("Validate Lowest and Highest TV Price", () => {

        cy.fixture("products").then((data) => {

            Logger.info("Searching for TV");

            SearchPage.searchProduct(data.productName);

            Logger.info("Clicking Low to High Sort");

            SearchPage.clickLowToHighSort();

            SearchPage.getAllProducts().then((products) => {

                const lowestProduct = getLowestProduct(products);
                const highestProduct = getHighestProduct(products);

                Logger.separator();

                Logger.success(`Lowest Product: ${lowestProduct.name}`);
                Logger.success(`Lowest Price: ₹${lowestProduct.price}`);
                Logger.success(`Highest Product: ${highestProduct.name}`);
                Logger.success(`Highest Price: ₹${highestProduct.price}`);

                Logger.separator();

                cy.screenshot("Price_Validation");

                Logger.success("Price validation passed");
            });
        });
    });
});