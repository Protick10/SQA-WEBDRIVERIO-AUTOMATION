const AddToCartLocators = require('../../pages/addToCart/addToCratLocators');
const Utility = require('../../Utilities/utility');



class AddToCartActions{
    async clickOnProductFromList(productname){
        await (await AddToCartLocators.productFromList(productname)).click();// here there is two await because first await is for locator's productionfromlist method and second await is for click method
    }

    async selectSize(num){
        await AddToCartLocators.size(num).click();
        await browser.pause(2000);
    }

    async selectColor(){
        await AddToCartLocators.color.click();
        await browser.pause(2000);
    }

    async enterQuantity(qty){
        await AddToCartLocators.inputquantityfield.setValue(qty);
    }

    async clickOnAddToCart(){
        await AddToCartLocators.addToCartButton.click();
        await browser.pause(2000);
    }

    async clickOnViewCart(){
        await AddToCartLocators.viewCartFromModal.click();
        // await browser.pause(2000);
    }

    async getSingleProductPrice(){
        const productprice =  await AddToCartLocators.priceFromProductPage.getText();
        // const productpriceinnumber = parseFloat(productprice.replace(/[$,]/g, ""));

        // return productpriceinnumber;

        return await Utility.convertTextToNumber(productprice);
    }
}

module.exports = new AddToCartActions(); // Exporting the class instance