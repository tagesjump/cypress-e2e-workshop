describe('Оформление заказа', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Добавление товара в корзину', () => {
    cy.login("test@mail.com", "1")
  })

})
