// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import ShopPage from "./page-objects/shop-page";

Cypress.Commands.add('login', (email, password) => {
    let shopPage = new ShopPage()
    cy.visit('/user/login/index')
    shopPage.emailInput().type('test@mail.com')
    shopPage.passwordInput().type('1')

    shopPage.loginBtn().click();

    cy.url().should('include', '')

    shopPage.profileBtn().should('be.visible').should('contain.text','Test')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })