import { faker } from '@faker-js/faker'

describe('User API', () => {

  it('should create user successfully', () => {

    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      title: 'Mr',
      birth_date: '10',
      birth_month: '5',
      birth_year: '1998',
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'Canada',
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      city: faker.location.city(),
      mobile_number: faker.phone.number(),
    }

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: user
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(201)
      expect(body.message).to.eq('User created!')

      cy.wait(3000)

    })

  })

  it('should not create user with duplicated email', () => {

    const duplicatedUser = {
      name: 'Gabriel',
      email: 'teste@email.com',
      password: '123456',
      title: 'Mr',
      birth_date: '10',
      birth_month: '5',
      birth_year: '1998',
      firstname: 'Gabriel',
      lastname: 'Alexandria',
      company: 'QA',
      address1: 'Street 1',
      address2: 'Street 2',
      country: 'Canada',
      zipcode: '12345',
      state: 'Bahia',
      city: 'Salvador',
      mobile_number: '71999999999'
    }

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      failOnStatusCode: false,
      form: true,
      body: duplicatedUser
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(400)
      expect(body.message).to.include('Email already exists')

      cy.wait(3000)

    })

  })

})