const CheckoutLocators = require("../../pages/checkout/checkoutLocators");
const Utility = require("../../Utilities/utility");

class CheckoutActions{

  

    async getSubTotal(){
        const subtotal =  await CheckoutLocators.subtotal.getText();
        const subtotalinnumber = await Utility.convertTextToNumber(subtotal);
        return subtotalinnumber;
    }

    async getGrandTotal(){
        const grandtotal =  await CheckoutLocators.grandtotal.getText();
        return await Utility.convertTextToNumber(grandtotal);
    }

    async clickOnCheckoutButton(){
        await CheckoutLocators.checkoutbutton.click();
    }
}

module.exports = new CheckoutActions(); // Exporting the class instance