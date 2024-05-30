Feature: Login into the site with valid data
  Background: Navigate to the Website
      Given I visit the free plan page
  Scenario: Login into the application with valid data
      When I input a search term
      Then Page title is verified