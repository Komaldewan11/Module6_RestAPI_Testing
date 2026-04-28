describe('Create Booking POST API Test', () => {
    it ('Should create a new booking', () => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
            firstname : "Jim",
            lastname : "Brown",
            totalprice : 111,
            depositpaid : true,
            bookingdates : {
                checkin : "2025-07-11",
                checkout : "2025-07-18"
            },
            additionalneed : "Breakfast"
        }).then((response) => {
            //Assertions
            expect(response.status).to.eq(200 || 201);
            expect(response.body).to.have.property('bookingid');
            expect(response.body).to.have.property('booking');
            expect(response.body.booking.firstname).to.eq('Jim');
            //Logs
            cy.log('Status Code: ' + response.status);
            cy.log('Response Body: ' + JSON.stringify(response.body));
        });
    });
});