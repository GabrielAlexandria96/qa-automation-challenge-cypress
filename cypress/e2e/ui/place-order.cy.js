import homePage from '../../pages/homePage'
import cartPage from '../../pages/cartPage'
import signupPage from '../../pages/signupPage'
import paymentPage from '../../pages/paymentPage'

describe('Place Order', () => {

  it('should place order successfully', () => {

    const user = signupPage.generateUser()

    homePage.visit()

    homePage.addFirstProductToCart()

    homePage.continueShopping()

    homePage.addSecondProductToCart()

    cartPage.openCart()

    cartPage.verifyProductsInCart()

    cartPage.proceedToCheckout()

    signupPage.signup(user)

    signupPage.fillAccountInformation(user)

    signupPage.verifyAccountCreated()

    signupPage.continueAfterAccountCreation()

    signupPage.verifyLoggedUser()

    cartPage.openCart()

    cartPage.proceedToCheckout()

    paymentPage.openPlaceOrder()

    paymentPage.fillPaymentAndPlaceOrder(user)

    paymentPage.verifyOrderSuccess()

  })

})