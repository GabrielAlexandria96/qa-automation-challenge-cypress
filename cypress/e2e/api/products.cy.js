import Ajv from 'ajv'

describe('Products API', () => {

  it('should get all products list', () => {

    const ajv = new Ajv()

    const schema = {
      type: 'object',
      properties: {
        products: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              price: { type: 'string' },
              brand: { type: 'string' },
            },
            required: ['id', 'name', 'price']
          }
        }
      },
      required: ['products']
    }

    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList'
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = JSON.parse(response.body)

      const validate = ajv.compile(schema)

      const valid = validate(body)

      expect(valid).to.be.true

      cy.wait(3000)

    })

  })

})