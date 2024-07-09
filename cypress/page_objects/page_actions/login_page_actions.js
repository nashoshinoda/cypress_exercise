const login_element_locator = require("../page_elements/login_page_elements.json")

export class LoginPageActions {


    username (username_text) {
        cy.get(login_element_locator.locators.username_field).type(username_text)

        return
    }

    password (password_text) {
        cy.get(login_element_locator.locators.password_field).type(password_text)

        return
    }

    loginButton () {
        cy.get(login_element_locator.locators.login_button).click()

        return
    }
}