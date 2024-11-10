// we will go to action with search locators

const searchLocators = require("../../pages/search/searchLocators");

class SearchActions{

    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productname){
        await searchLocators.searchInputField.setValue(productname);
    }

    // async search(productname){
    //     await this.clickOnSearchIcon();
    //     await this.enterSearchItemName(productname);
    //     await browser.keys("Enter");
    // }

    async selectedProduct(num){
       return await searchLocators.productList(num).getText();
    }
}

module.exports = new SearchActions(); // Exporting the class instance