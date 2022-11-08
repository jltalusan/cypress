/// <reference types="Cypress" />

const pageObjects = {
    goToContacts: () => {
        cy.get('[id=nav-contact]')
            .should('be.visible')
            .click()
        cy.contains('We welcome your feedback - tell it how it is.')
            .should('be.visible')
    },

    goToShop: () => {
        cy.get('[id=nav-shop]')
            .should('be.visible')
            .click()
        cy.contains('Teddy Bear')
            .should('be.visible')
    },

    goToCart: () => {
        cy.get('[id=nav-cart]')
        .should('be.visible')
        .click()
    },

    populateFeedback: () => {
        cy.get('[name=forename]')
            .type('Limuel')
        cy.get('[name=email]')
            .type('limuel.planit@gmail.com')
        cy.get('[name=message]')
            .type("Hi I'm Limuel, nice to meet you.")
    },

    submitFeedback: () => {
        cy.contains('Submit')
        .click()
    }
}

describe('Planit Technical Assessment ', () => {
    beforeEach(() => {
        cy.visit('https://jupiter.cloud.planittesting.com/')
        cy.viewport(1920, 1080)
    })

    it('Test Case 1', () => {
        //start of test case 1
        pageObjects.goToContacts()
        pageObjects.submitFeedback()
        //start of error message assertion
        cy.contains("We welcome your feedback - but we won't get it unless you complete the form correctly.")
            .should('be.visible')
        cy.contains('Forename is required')
            .should('be.visible')
        cy.contains('Email is required')
            .should('be.visible')
        cy.contains('Message is required')
            .should('be.visible')
        //start of populating text fields
        pageObjects.populateFeedback()
        //verify error message are gone
        cy.contains('Forename is required')
            .should('not.exist')
        cy.contains('Email is required')
            .should('not.exist')
        cy.contains('Message is required')
            .should('not.exist')
        cy.contains("We welcome your feedback - but we won't get it unless you complete the form correctly.")
            .should('not.exist')
    })

    it('Test Case 2', () => {
        //start of test case 2
        pageObjects.goToContacts()
        pageObjects.populateFeedback()
        pageObjects.submitFeedback()
        cy.contains('Thanks Limuel, we appreciate your feedback.')
            .should('be.visible')
    })

    it('Test Case 3', () => {
        //start of test case 3
        pageObjects.goToShop()
        //quantity of product
        let i = 0;
        const a = 2; //Stuffed Frog
        const b = 5; //Fluffy Bunny
        const c = 3; //Valentine Bear
        //price of product
        const prod2price = 10.99; //Stuffed Frog
        const prod4price = 9.99;  //Fluffy Bunny
        const prod7price = 14.99; //Valentine Bear
        //total price of purchased product
        const totalprod2price = a * prod2price;
        const totalprod4price = b * prod4price;
        const totalprod7price = c * prod7price;
        //sum of all purchased products
        const totalsum = totalprod2price + totalprod4price + totalprod7price;

        for (i = 0; i < a ; i++) { 
            cy.get('[id=product-2]').within( ()=> {
                cy.contains('Stuffed Frog')
                cy.contains('Buy').click()
            })
        }
        for (i = 0; i < b ; i++) { 
            cy.get('[id=product-4]').within( ()=> {
                cy.contains('Fluffy Bunny')
                cy.contains('Buy').click()
            })
        }
        for (i = 0; i < c ; i++) { 
            cy.get('[id=product-7]').within( ()=> {
                cy.contains('Valentine Bear')
                cy.contains('Buy').click()
            })
        }

        pageObjects.goToCart()
        //asserting correct price for Stuffed frog
        cy.contains('$' + prod2price)
            .should('be.visible')
        cy.contains('$' + totalprod2price)
            .should('be.visible')
        //asserting correct price for Fluffy Bunny
        cy.contains('$' + prod4price)
            .should('be.visible')
        cy.contains('$' + totalprod4price)
            .should('be.visible')
        //asserting correct price for Valentine Bear
        cy.contains('$' + prod7price)
            .should('be.visible')
        cy.contains('$' + totalprod7price)
            .should('be.visible')
        //assertion of total sum of the products purchased
        cy.contains('Total: 116.9').eq.toString('Total: ' + totalsum)
    })
})