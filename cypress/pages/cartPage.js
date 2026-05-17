class CartPage {

  openCart() {

    cy.get('.shop-menu a[href="/view_cart"]')
      .click()

  }

  verifyProductsInCart() {

    cy.get('#product-1')
      .should('be.visible')

    cy.get('#product-2')
      .should('be.visible')

  }

  proceedToCheckout() {

  cy.contains('Proceed To Checkout')
    .click()

  cy.url().then((url) => {

    if (url.includes('/view_cart')) {

      cy.visit('/login')

    }

  })

}
}

export default new CartPage()