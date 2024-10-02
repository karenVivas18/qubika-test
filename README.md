
To run the purchase flow test, follow these steps:

Prerequisites
Node.js: Ensure you have Node.js installed on your machine. You can download it from Node.js official website.
Playwright: This test framework relies on Playwright. Make sure you have it installed.
Setup

Install Dependencies: Run the following command to install the necessary packages:

npm install

Running the Test
Run Tests: Execute the tests using the following command:
npx playwright test 

View Results: After running the tests, results will be displayed in the terminal. Any failures will include error messages for debugging.

Generate HTML Report: After running the tests, an HTML report will be generated in the test-results directory. You can view it in your web browser. The command to generate the report is:
npx playwright show-report

Additional Notes
You can run tests for a specific file by specifying its path
npx playwright test <test-file-path>


node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
