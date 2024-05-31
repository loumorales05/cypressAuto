/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import home from '../tasks/goToHomePage.cy';

Given('I visit the free plan page', async () => {
    /*await cy.visit('https://the-internet.herokuapp.com')*/
    home.enterURL();
});

When("I Click on Start now button", async () => {
    home.clickStartNow();
});

Then("Page title is verified", async () => {
    home.verifyTitle();
});