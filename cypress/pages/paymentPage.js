class PaymentPage {

  openPlaceOrder() {

    cy.contains('Place Order', { timeout: 10000 })
      .should('be.visible')
      .click()

  }

  fillPaymentAndPlaceOrder(user) {

    cy.get('[data-qa="name-on-card"]')
      .type(user.firstName)

    cy.get('[data-qa="card-number"]')
      .type('4111111111111111')

    cy.get('[data-qa="cvc"]')
      .type('123')

    cy.get('[data-qa="expiry-month"]')
      .type('12')

    cy.get('[data-qa="expiry-year"]')
      .type('2030')

    cy.get('[data-qa="pay-button"]')
      .click()

  }

  verifyOrderSuccess() {

    cy.contains('Order Placed!', { timeout: 15000 })
      .should('be.visible')

    cy.wait(2000)

  }

}

export default new PaymentPage()