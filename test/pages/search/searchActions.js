// we will go to action with search locators

const searchLocators = require("../../pages/search/searchLocators");

class SearchActions{

    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productname){
        await searchLocators.searchInputField.setValue(productname);
    }
}

module.exports = new SearchActions(); // Exporting the class instance