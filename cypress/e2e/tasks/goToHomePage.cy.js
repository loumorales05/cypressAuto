class goToHomePage {
    enterURL() {
      cy.visit("https://www.google.com.co");
    }

    enterSearchTerm(){
      cy.get("#APjFqb").clear().type("Luis");
      return this;
    }

    verifyTitle(){
      return cy.title().should("eq", "Google");
    }
   
    }
    const home = new goToHomePage();
    export default home;
    