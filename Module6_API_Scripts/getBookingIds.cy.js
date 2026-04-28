describe('Get Booking IDs API Test', () => {
it ('Should return booking Ids', () =>{
    cy.request('https://restful-booker.herokuapp.com/booking')
    .then((response) => {
        //Assertions
        expect(response.status).to.eq(200);
        expect(response.body[0]).to.have.property('bookingid');
        expect(response.body.length).to.be.greaterThan(0);
        //Logs
        cy.log('Status Code: ' + response.status);
        cy.log('First Booking ID Number: ' + response.body[0].bookingid);
        });
    })
});