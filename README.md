# Playwright Demo - Basic Test with TypeScript for Expedite Assist

## What is Playwright?
- The playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing.
- Playwright by Microsoft did start as a fork of Puppeteer Puppeteer is a node library to automate the chromium browsers with the JavaScript API

## How to use?
- Clone the repository
- open the project
- From the terminal install all the dependencies using 'npm i'

## Install Node.js

Ensure Node.js is installed on your system. You can download and install it from nodejs.org.

## To verify the installation, run:

node -v
npm -v

## Initialize Your Project. Create a new project directory and initialize it:

mkdir my-playwright-project
cd my-playwright-project
npm init -y

## Install Playwright Use the following command to install Playwright:

npm install @playwright/test

## Install Browsers Install the required browser binaries:

npx playwright install

##  Verify Installation To ensure everything is set up, run a sample test:

npx playwright test
Run Playwright Tests

## Use this command to run Playwright tests:

npx playwright test
npx playwright test --ui

## Use this command to watch the reports:
- npx playwright show-report

## Execute tests on all browsers:
- npx playwright test --project=all

## Alternatively, run tests for specific browsers like Chromium, Firefox, or Webkit:
- npx playwright test --project=chromium

## To run specific test files, use:
- npx playwright test tests_expidite_assist/Test\ 1\ Register\ New\ User.spec.ts

# Project Structure
- tests_expidite_assist: This folder contains all the test cases for Expedite Assist.
     - Test 1 Register New User.spec.ts: Tests for new user registration.
     - Test 1a Register Existing User.spec.ts: Validates registration of an existing user.
     - Test 2 Login Validation.spec.ts: Tests for successful login and verification of credentials.
     - Test 2a Login With Incorrect Cred.spec.ts: Tests login failure due to incorrect credentials.
     - Test 3 Create Ticket.spec.ts: Automates the process of creating a support ticket.
     - Test 4 Create Case.spec.ts: Tests the case management system, ensuring cases are created and tracked correctly.

# Features
Cross-Browser Support: The scripts are designed to execute across multiple browsers (Chromium, Firefox, Webkit).
- Test Scenarios:
  - New user registration.
  - Validation of existing user registration.
  - Login with correct and incorrect credentials.
     Creation of support tickets and cases.

- Screen Capture: Screenshots and videos are captured on test failure to aid debugging.
  
- Custom Test Data: Use of structured test data for reusability in the test-data folder
  
## Required software
- Node js -> v.14 or above
- VS Code
- Playwright Vs Code Extension

Explore the Playwright Docs
For further usage and configuration, check the official documentation:
Playwright Documentation
