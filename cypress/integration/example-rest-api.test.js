//
// Example of REST API testing using Cypress from this blog post:
//
// https://www.abygeorgea.com/blog/2018/05/27/running-api-test-using-cypress/
//

describe('Example REST API test', () => {

    it('Validate the header', () => {
       const result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')
      
       result.its('headers')
             .its('content-type')
             .should('include', 'application/json')
        
    });

    it('Validate the status', () => {
        const result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')
       
        result.its('status')
              .should('equal',200);
     });

     it('Validate the body ', () => {
        const result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')
       
        result.its('body')
              .its('RestResponse.messages')
              .should('include', 'Country found matching code [AU].');
      
     });
});