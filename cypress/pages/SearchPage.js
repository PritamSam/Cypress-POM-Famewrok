class SearchPage {
    searchProduct(Name) {
        cy.get('input[name="q"]').first().should('be.visible').type(`${Name}{enter}`);
    }

     getProductCards() {
        return cy.get('[data-id]');
    }

    clickLowToHighSort() {
        cy.contains('Price -- Low to High').click();
    }

    getAllProducts() {

        return cy.get('[data-id]').then(($products) => {

            const productData = [];

            $products.each((index, element) => {

                const productName =
                    Cypress.$(element)
                        .find('a')
                        .first()
                        .text()
                        .trim();

                const priceText =
                    Cypress.$(element)
                        .text()
                        .match(/₹([\d,]+)/);

                if (priceText) {

                    productData.push({
                        name: productName,
                        price: Number(
                            priceText[1].replace(/,/g, '')
                        )
                    });
                }
            });

            return productData;
        });
    }
}

export default new SearchPage();