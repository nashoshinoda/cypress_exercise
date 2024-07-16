/// <reference types="Cypress" />
import { LoginPageActions } from "../../../page_objects/page_actions/login_page_actions"
import { HomePageActions } from "../../../page_objects/page_actions/home_page_actions"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const login_elements = new LoginPageActions
const home_elements = new HomePageActions

Given("Visit the Orange HRM Website", function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("User provide invalid username", function() {
    login_elements.username("Admin!")
})

When("User provide password", function() {
    login_elements.password("admin123")
})

Then("Click on the Login button to log into the Orange HRM Website", function() {
    login_elements.loginButton()
})

Then("Error message displayed", function() {
    cy.contains(login_elements.errorMessage(), "Invalid credentials").screenshot()
})

When("User provide username", function() {
    login_elements.username("Admin")
})

When("User provide password", function() {
    login_elements.password("admin123")
})

Then("Click on the Login button to log into the Orange HRM Website", function() {
    login_elements.loginButton()
})

Then("User must accessed to the HRM Website", function() {
    cy.contains(home_elements.user_icon(), "Test ").screenshot()
})
