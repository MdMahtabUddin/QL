export class LoginPage{

    username_textbox =':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passward_textbox=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button='.oxd-button'
    
    enterUsername(){
        cy.get(this.username_textbox).type('Admin')

    }

    unterPassward(){
        cy.get(this.passward_textbox).type('admin123')

    }

    clickLogin(){
        cy.get(this.login_button).click()


    }
}