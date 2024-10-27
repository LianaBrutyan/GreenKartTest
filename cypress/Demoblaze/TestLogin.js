class TestLogin {
    elements={
        Loginbutton:'---------'
    }

    login(){
        cy.get('#loginusername').type('TestPOM')
        cy.get('#loginpassword').type('testing')
        cy.get('button[onclick="logIn()"]').click()

    }
}

export default TestLogin

