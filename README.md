# Cypress custom E2E POM & Cucumber Framework

### Summary
This is a little automation project to test Cypress.io using the following tools:
* Node.js ^20.15.1
* Cypress ^13.13.0
* Cypress Cucumber Preprocessor ^4.3.1
* Allure Commandline ^2.29.0
* Allure Cypress ^3.0.0-beta.6
* VSCode ^1.91.0
* Cucumber (Gherkin) Full Support VSCode extension

### How to use it
* Install Node.js following the instructions from the [Node.js official page](https://nodejs.org/en/download/package-manager).
* Clone the repository:
    ```sh
    git clone https://github.com/nashoshinoda/cypress_exercise.git
    ```
* Install dependencies:
    ```sh
    npm install --save-dev cypress
    npm install --save-dev cypress-cucumber-preprocessor
    npm install --save-dev allure-commandline
    npm install --save-dev allure-cypress
    ```
* Run the test executing this command:
    ```sh
    npx cypress run
    ```
* Generate an Allure report executing the following command:
    ```sh
    npx allure serve cypress/reports/allure-results/
    ```
    Example:

#### Notes
* Cypress executes the tests using Electron by default (more information [here](https://docs.cypress.io/guides/guides/launching-browsers)). If you want to use a specific browser, just add the following argument choosing the option desired:
    ```sh
    npx cypress run --browser chrome
    npx cypress run --browser firefox
    npx cypress run --browser edge
    npx cypress run --browser webkit
    ```


This project has a small GitHub action that runs the test case in every push. The results from these executions can be found [here](https://github.com/nashoshinoda/cypress_exercise/actions).
