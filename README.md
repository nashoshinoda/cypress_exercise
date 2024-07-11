# Cypress custom E2E POM & Cucumber Framework

### Summary
This is a little automation project to test Cypress.io using the following tools:
* Node.js ^20.15.1
* Cypress ^13.13.0
* Cypress Cucumber Preprocessor ^4.3.1
* Allure Commandline ^2.29.0
* Allure Cypress ^3.0.0-beta.6
* VSCode ^1.91.0
* Cucumber (Gherkin) Full Support extension

### How to use it
* Install Node.js following the instructions from the [Node.js official page](https://nodejs.org/en/download/package-manager).
* Clone the repository:
    ```sh
    git clone https://github.com/nashoshinoda/cypress_exercise.git
    ```
* Run the test executing this command:
    ```sh
    npx cypress run
    ```
* Generate an Allure report executing the following command:
    ```sh
    npx allure serve allure-results
    ```