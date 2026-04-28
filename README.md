Cypress API Testing - Restful Booker
This project uses Cypress to test the Restful Booker API, a demo REST API for practice.
 
**Purpose**
To validate the functionality of various REST API endpoints using Cypress, including:
- Ping-Health check
- Booking creation
- Booking updation 
- Booking deletion 
- Fetching booking IDs
  
**Key Features**
- Cypress request-based API testing (no UI — pure API layer)
- Token-based authentication handled within the test flow
- Step-by-step flow: Create → Authenticate → Update → Delete
- Beginner-friendly structure with clear, readable test files

**Project Structure**
cypress/e2e/Module6_API_Scripts/
            healthCheck.cy.js
            createBooking.cy.js
            updateBooking.cy.js
            getBookingIds.cy.js
            deleteBooking.cy.js
   cypress.config.js
   package.json
   README.md
  
**How to Run**
1. Install Dependencies
Make sure Node.js]is installed, then run
bash: npm install cypress --save-dev

2. Open Cypress Test Runner
bash: npx cypress open

3. Run a specific test file
Navigate to cypress/e2e/Module6_API_Scripts/ and select any .cy.js file in the Cypress UI.
