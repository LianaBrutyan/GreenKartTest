

import TestLogin from "../Demoblaze/TestLogin";

    describe('Test demoblaze', () => {


    it('Test login functionality ', () => {
        cy.visit('https://demoblaze.com/index.html')

        const testlogin = new TestLogin()
        testlogin.login()

    })
})