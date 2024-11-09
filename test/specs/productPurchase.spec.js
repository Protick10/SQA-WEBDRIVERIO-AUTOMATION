//Mocha Framework

const SearchActions = require("../pages/search/searchActions");
const AddToCartActions = require("../pages/addToCart/addToCartActions");
const productname = "Nike react phantom run flyknit 2"
describe("Demo Evershop site product purchase journey",()=> {  //This is the test suite

    it("Should able to successfully search product", async() =>{ //Test case
       await SearchActions.clickOnSearchIcon();
       await SearchActions.enterSearchItemName("Nike"); // enter search keyword
       await browser.keys("Enter") ;//press enter from keyboard
        // await browser.quit()
        
    });

    it("Should able to successfully Add Product into the cart", async() =>{ //Test case
        await AddToCartActions.clickOnProductFromList(productname);
        await AddToCartActions.selectSize();
        await AddToCartActions.selectColor();
        await AddToCartActions.enterQuantity();
        await AddToCartActions.clickOnAddToCart();
        await AddToCartActions.clickOnViewCart();
        // await browser.quit()
    
    });
});