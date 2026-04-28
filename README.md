 Cypress API Testing - Restful Booker
 This project uses Cypress to test the [Restful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html), a demo REST API for practice.
 
The purpose of your tests: 
To validate the functionality of various REST API endpoints using Cypress, including:
- Ping-Health check
- Booking creation
- Booking updation 
- Booking deletion 
- Fetching booking IDs
  
Key features of your testing approach.
- Cypress request-based API testing
- Token-based authentication is handled
- Step-by-step flow: Create → Auth → Update → Delete
- Beginner-friendly structure
  
Instructions to run the tests.
1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed.
Then, install Cypress using terminal:
bash: npm install cypress --save-dev
Open Cypress Test Runner
bash: npx cypress open
Open File: cypress/e2e/Module6_API_Scripts/
              ├── healthCheck.cy.js
              ├── createBooking.cy.js
              ├── updateBooking.cy.js
              ├── getBookingIds.cy.js
              ├── deleteBooking.cy.js
