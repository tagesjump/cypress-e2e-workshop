
describe('Авторизация', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    cy.visit('/')

  })

  it('Вход под standart', () => {
    cy.visit('/user/login/index')
    cy.get('#exampleInputEmail1').type('test@mail.com')
    cy.get('#exampleInputPassword1').type('1')

    cy.get('.btn-primary').click();


    cy.url().should('include', '')

    cy.get('#navbarDropdown2').should('be.visible')

  })

})
