import shopPage from "../support/page-objects/shop-page";
describe('Оформление заказа', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login("test@mail.com", "1")
  })

  it('Оформление заказа', () => {
    // Шаги
    shopPage.productCard("Шортики").click()
    shopPage.productValueInput().type("1")
    shopPage.addCartBtn().click()
    shopPage.cartBtn().click()
    shopPage.phoneInput().type("79091110000")
    shopPage.addressInput().type("Пушкина, 6")
    shopPage.createOrderBtn().click()

    // ОР
    shopPage.orderMsg().should("contain.text", "Ваш заказ №")
  })

})
