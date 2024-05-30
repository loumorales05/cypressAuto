/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import home from '../tasks/goToHomePage.cy';

Given('I visit the free plan page', async () => {
    /*await cy.visit('https://the-internet.herokuapp.com')*/
    home.enterURL();
});

When("I input a search term", async () => {
    home.enterSearchTerm();
});

Then("Page title is verified", async () => {
    home.verifyTitle();
});