Feature: Orange HRM Login Feature

    Through this feature User should be able to login into Orange HRM demo website

    Scenario: User should be able to login using invalid credentials
    Given Visit the Orange HRM Website
    When User provide invalid username
    When User provide password
    Then Click on the Login button to log into the Orange HRM Website
    Then Error message displayed

    Scenario: User should be able to login using valid credentials
    Given Visit the Orange HRM Website
    When User provide username
    When User provide password
    Then Click on the Login button to log into the Orange HRM Website
    Then User must accessed to the HRM Website