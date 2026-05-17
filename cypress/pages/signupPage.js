import { faker } from '@faker-js/faker'

class SignupPage {

  generateUser() {

    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      country: 'Canada',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobileNumber: faker.phone.number(),
    }

  }

  openSignupPage() {

  cy.get('.modal-body a')
    .click()

}

  signup(user) {

    cy.get('[data-qa="signup-name"]')
      .type(user.name)

    cy.get('[data-qa="signup-email"]')
      .type(user.email)

    cy.get('[data-qa="signup-button"]')
      .click()

  }

  fillAccountInformation(user) {

    cy.get('#id_gender1')
      .click()

    cy.get('[data-qa="password"]')
      .type(user.password)

    cy.get('[data-qa="days"]')
      .select('10')

    cy.get('[data-qa="months"]')
      .select('May')

    cy.get('[data-qa="years"]')
      .select('1998')

    cy.get('[data-qa="first_name"]')
      .type(user.firstName)

    cy.get('[data-qa="last_name"]')
      .type(user.lastName)

    cy.get('[data-qa="address"]')
      .type(user.address)

    cy.get('[data-qa="country"]')
      .select(user.country)

    cy.get('[data-qa="state"]')
      .type(user.state)

    cy.get('[data-qa="city"]')
      .type(user.city)

    cy.get('[data-qa="zipcode"]')
      .type(user.zipcode)

    cy.get('[data-qa="mobile_number"]')
      .type(user.mobileNumber)

    cy.get('[data-qa="create-account"]')
      .click()

  }

  verifyAccountCreated() {

    cy.contains('Account Created!')
      .should('be.visible')

  }

  continueAfterAccountCreation() {

    cy.contains('Continue')
      .click()

  }

  verifyLoggedUser() {

    cy.contains('Logged in as')
      .should('be.visible')

  }

}

export default new SignupPage()