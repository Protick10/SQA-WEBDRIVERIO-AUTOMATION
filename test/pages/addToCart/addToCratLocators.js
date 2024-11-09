class AddToCartLocators{

   //cant use get here because we are passing a parameter 
    async productFromList(productname){
        const productXpath = `//a[contains(@href,'182')]/span[contains(text(),'${productname}')]`
        return $(productXpath);
    }

    get size(){
        return $("//a[@href='#' and contains(text(),'S')]");
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

}

module.exports = new AddToCartLocators();