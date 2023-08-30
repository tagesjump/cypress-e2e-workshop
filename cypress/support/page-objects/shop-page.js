export default {
    emailInput: ()=> cy.get('#exampleInputEmail1'),
    passwordInput: ()=> cy.get('#exampleInputPassword1'),
    loginBtn: ()=> cy.get('.btn-primary'),
    profileBtn: ()=> cy.get('#navbarDropdown2'),
    productCard: (name)=> cy.get('.col-md-4').contains(name),
    productValueInput: ()=> cy.get('#exampleCount'),
    addCartBtn: ()=> cy.get('button.btn-primary'),
    cartBtn: ()=> cy.get('.fa-shopping-cart'),
    phoneInput: ()=> cy.get('#InputPhone'),
    addressInput: ()=> cy.get('#InputAddr'),
    createOrderBtn: ()=> cy.get('.pt-4').children('.btn-primary'),
    orderMsg: ()=> cy.get('.alert-info')
 }