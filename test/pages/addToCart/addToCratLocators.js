class AddToCartLocators{

   //cant use get here because we are passing a parameter 
    async productFromList(productname){
        // const productXpath = `//a[contains(@href,'182')]/span[contains(text(),'${productname}')]`
        const productXpath = `//a[contains(@href,'')]/span[contains(text(),'${productname}')]`
        return $(productXpath);
    }

    size(num){
        return $(`(//ul[contains(@class, 'variant-option-list')]/li)[${num}]`);
    }

    get color(){
        return $("//a[@href='#' and contains(text(),'Black')]");
    }   

    get inputquantityfield(){
        return $("//input[@placeholder='Qty']");
    }

    get addToCartButton(){
        return $("//button[@type='button']/span[contains(text(),'ADD TO CART')]");
    }

    get viewCartFromModal(){
        return $("//a[contains(text(),'VIEW CART (1)')]");
    }

    get priceFromProductPage(){
        return $("//span[@class='sale-price']")
    }

    

}

module.exports = new AddToCartLocators();