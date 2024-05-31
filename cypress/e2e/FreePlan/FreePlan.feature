Feature: Login into the site with valid data
  Background: Navigate to the Website
      Given I visit the free plan page
  Scenario: Login into the application with valid data
      When I Click on Start now button
      Then Page title is verified