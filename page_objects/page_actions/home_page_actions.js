const homepage_element_locator = require("../page_elements/home_page_elements.json")

export class HomePageActions {
    topbar () {
        cy.get(homepage_element_locator.locators["top-navbar"])

        return
    }

}