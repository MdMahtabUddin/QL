import { LoginPage } from "./pages/login_page"

const loginPage =new LoginPage()

it('page object model', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    loginPage.enterUsername()
    loginPage.unterPassward()
    loginPage.clickLogin()

  })