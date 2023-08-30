class ShopPage {
    emailInput = () => cy.get('#exampleInputEmail1')
    passwordInput = () => cy.get('#exampleInputPassword1')
    loginBtn = () => cy.get('.btn-primary')
    profileBtn = () => cy.get('#navbarDropdown2')
}
export default ShopPage
