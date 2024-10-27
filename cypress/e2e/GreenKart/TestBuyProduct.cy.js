describe('Test Green Kart page', () => {


    it('Test to buy Brocolli ', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[class="search-keyword"]').type("brocolli")
        cy.get('input[class="quantity"]').should('have.value',1)
        cy.get('a.increment').click()
        cy.get('a.increment').click()
        cy.get('input.quantity').should('have.value',3)
        cy.get('div.product-action>button').click()
        cy.contains('ADDED').should('be.visible')
        cy. get('a.cart-icon').click()
        cy.get('div.cart-preview.active').should('be.visible')
        cy.get('.product-info p').first().should('contain.text','Brocolli - 1 Kg')
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get('tr .product-name').should('be.visible')
        cy.get('input[type="text"]').type("test")
        cy.get('.promoBtn').click()
        cy.wait(2000)
        cy.contains('Invalid code ..!').should('be.visible')
        cy.get('.products button').contains('Place Order').click()
        cy.get('.wrapperTwo select').select('Armenia')
        cy.get('.chkAgree').check()
        cy.get('button').contains("Proceed").click()
        cy.contains('Thank you').should('be.visible')

    })
})
