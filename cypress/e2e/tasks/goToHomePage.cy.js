class goToHomePage {
    enterURL() {
      cy.visit("https://app.enginebi.net/subscription/0-plans");
    }

    clickStartNow(){
      cy.get(':nth-child(1) > ecommerce-product-card > .ant-card > .ant-card-body > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-description > :nth-child(3) > div > .ant-btn', { timeout: 20000 }).should('be.visible').click();
    }

    verifyTitle(){
      return cy.title().should("eq", "EngineBI");
    }
   
    }
    const home = new goToHomePage();
    export default home;
    