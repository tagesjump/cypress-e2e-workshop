import ShopPage from "../support/page-objects/shop-page";

describe('Оформление заказа', () => {
  let shopPage = new ShopPage()

  beforeEach(() => {
    cy.visit('/')
  })

  it('Добавление товара в корзину', () => {
    cy.login("test@mail.com", "1")
  })

})
