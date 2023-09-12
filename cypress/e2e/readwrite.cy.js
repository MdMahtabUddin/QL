// describe('template spec', () => {


  
   
//   })

// before(function(){
//     cy.fixture('example.json').as(test_data)
// })

  it('Read Files using Fixtures', () => {
      
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log (data.email)
    })
// cy.log(this.test_data.name)
})

it('read files using ReadFile()',()=>{
    cy.readFile('cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})


it('write Files using writeFile()',()=>{
    cy.writeFile('sample.txt','I am Mahtab')
})