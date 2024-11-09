const AddToCartLocators = require('../../pages/addToCart/addToCratLocators');



class AddToCartActions{
    async clickOnProductFromList(productname){
        await (await AddToCartLocators.productFromList(productname)).click();// here there is two await because first await is for locator's productionfromlist method and second await is for click method
    }

    async selectSize(){
        await AddToCartLocators.size.click();
        await browser.pause(2000);
    }

    async selectColor(){
        await AddToCartLocators.color.click();
        await browser.pause(2000);
    }

    async enterQuantity(){
        await AddToCartLocators.inputquantityfield.setValue(2);
    }

    async clickOnAddToCart(){
        await AddToCartLocators.addToCartButton.click();
        await browser.pause(2000);
    }

    async clickOnViewCart(){
        await AddToCartLocators.viewCartFromModal.click();
        // await browser.pause(2000);
    }
}

module.exports = new AddToCartActions(); // Exporting the class instance