/// <reference types ="cypress"/>?

it("Googl Search",()=>{
    cy.visit('http://google.com')

    // add custom timeout 
    cy.get('#APjFqb',{timeout:5000}).type('Welcome to Bangladesh{Enter}')
   
    // cy.contains(' Google Search ').click
    cy.wait(2000)
    // cy.contains(' Vedios ').click
})
