describe('Update Booking PUT API Testing', () => {
    let bookingId;
    let token;

    it('Step1: Authenticate and get token', () => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
            username : "admin",
            password : "password123"
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.token;
            cy.log('Token: ' + token);
        });
    });

    it ('Step2: Create a new booking', () => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
            firstname : "Jim",
            lastname : "Brown",
            totalprice : 111,
            depositpaid : true,
            bookingdates : {
                checkin : "2025-07-11",
                checkout : "2025-07-18"
            },
            additionalneeds : "Breakfast"
        }).then((response) => {
            expect(response.status).to.eq(200);
            bookingId = response.body.bookingid;
            cy.log('Status Code: ' + response.status);
            cy.log('Booking ID: ' + bookingId);
        });
    });
    it('Step3: Should update a created booking', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,   
        headers: {
            Cookie: `token=${token}`,
            'Content-Type': 'application/json'
        },
        body:{
            firstname : "James",
            lastname : "Brown",
            totalprice : 150,
            depositpaid : true,
            bookingdates : {
                checkin : "2025-07-11",
                checkout : "2025-07-18"
            },
            additionalneeds : "Breakfast"
        }
    }).then((response) => {
            //Assertions
            expect(response.status).to.eq(200);
            expect(response.body.firstname).to.eq('James');
            expect(response.body.totalprice).to.eq(150);
            //Logs
            cy.log('Updated Name: ' + response.body.firstname);
            cy.log('Updated Total Price: ' + response.body.totalprice);
        });
    });
});