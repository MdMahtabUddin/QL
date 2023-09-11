it('assertions', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    
    // implicit assertion 
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .and('be.visible')
    // .should('be.disable')
    // and command also working assertion 



    


  })