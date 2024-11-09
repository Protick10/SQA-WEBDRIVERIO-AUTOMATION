//Mocha Framework

const SearchActions = require("../pages/search/searchActions");
const productname = "Nike react phantom run flyknit 2"
describe("Demo Evershop site product purchase journey",()=> {  //This is the test suite

    it("Should able to successfully search product", async() =>{ //Test case
       await SearchActions.clickOnSearchIcon();
       await SearchActions.enterSearchItemName(productname);
        // await browser.quit()
        
    })

})