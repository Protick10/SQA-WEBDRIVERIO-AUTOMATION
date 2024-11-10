class CheckoutLocators {




    get subtotal(){
        return $("//div[contains(text(), 'Sub total')]/following-sibling::div")
    }

    get grandtotal(){
        return $("//div[@class='grand-total-value']")
    }

    get checkoutbutton(){
        return $("//a[contains(@href, '/checkout')]")
    }
}

module.exports = new CheckoutLocators();