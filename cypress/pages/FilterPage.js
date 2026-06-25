class FilterPage {  

  verifyMenuItemsVisible(expectedMenuItems) {
    cy.get('div[style*="padding-right:16px"]', { timeout: 10000 })
      .find('div[style*="padding-right:0px"]')
      .then(($elements) => {
        const actualMenuItems = [...$elements].map(el => el.innerText.trim());

        expect(actualMenuItems).to.deep.equal(expectedMenuItems);
      });
  }

}

export default new FilterPage();