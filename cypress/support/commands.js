import shopPage from "./page-objects/shop-page";
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/user/login/index')
    shopPage.emailInput().type(email)
    shopPage.passwordInput().type(password)

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