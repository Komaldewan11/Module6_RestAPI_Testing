describe('Delete Booking API Test', () => {
    let token;
    //Get token first
    before(() => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
            username : "admin",
            password : "password123"
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.token;
            cy.log('Token: ' + token);
        });
    });

it ('Should delete booking with ID:1', () =>{
cy.request({
  method: 'DELETE',
  url: 'https://restful-booker.herokuapp.com/booking/1',
  headers: {
    Cookie: `token=${token}`
  }
}).then((response) => {
        //Assertions
        expect(response.status).to.eq(201);
        //Logs
        cy.log('Booking ID:1 deleted successfully');
        });
    })
});