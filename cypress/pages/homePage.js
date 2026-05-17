class HomePage {

  visit() {
    cy.visit('/')
  }

  addFirstProductToCart() {

    cy.get('.product-image-wrapper')
      .eq(0)
      .trigger('mouseover')

    cy.get('.overlay-content .add-to-cart')
      .eq(0)
      .click({ force: true })

  }

  addSecondProductToCart() {

    cy.get('.product-image-wrapper')
      .eq(1)
      .trigger('mouseover')

    cy.get('.overlay-content .add-to-cart')
      .eq(1)
      .click({ force: true })

  }

  continueShopping() {

  cy.get('.modal-content')
    .should('be.visible')

  cy.contains('Continue Shopping')
    .should('be.visible')
    .click()

  cy.get('#cartModal')
    .should('not.be.visible')

}

}

export default new HomePage()