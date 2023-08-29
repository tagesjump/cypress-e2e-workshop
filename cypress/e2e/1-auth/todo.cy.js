
describe('Авторизация', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Вход под test@mail.com', () => {
    cy.visit('/user/login/index')
    cy.get('#exampleInputEmail1').type('test@mail.com')
    cy.get('#exampleInputPassword1').type('1')

    cy.get('.btn-primary').click();


    cy.url().should('include', '')

    cy.get('#navbarDropdown2').should('be.visible')
    cy.get('#navbarDropdown2').should('contain.text','Test')
  })

})
