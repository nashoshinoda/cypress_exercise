/// <reference types="Cypress" />

import { LoginPageActions } from "../../page_objects/page_actions/login_page_actions"

const login_elements = new LoginPageActions

describe("Page Object Model tutorial", function() {
    it("Login Page using invatlid credentials", function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        login_elements.username("Admin123")
        login_elements.password("admin123")
        login_elements.loginButton()
    })

    it("Login Page using vatlid credentials", function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        login_elements.username("Admin")
        login_elements.password("admin123")
        login_elements.loginButton()
    })
})
