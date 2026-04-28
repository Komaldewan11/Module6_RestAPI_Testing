describe('Ping - HealthCheck API Test', () => {
it ('API Test, Should return valid status code', () =>{
    cy.request('https://restful-booker.herokuapp.com/ping')
    .then((response) => {
        cy.log('Status Code: ' + response.status);
        expect(response.status).to.eq(201);
        });
    })
});