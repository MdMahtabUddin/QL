import { LoginPage } from "./pages/login_page"

const loginPage =new LoginPage()

it('Login test 1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    loginPage.enterUsername()
    loginPage.unterPassward()
    loginPage.clickLogin()
    
    

  })

  it('Login test 2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    loginPage.enterUsername()
    loginPage.unterPassward()
    loginPage.clickLogin()
    
    

  })

