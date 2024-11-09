//Mocha Framework
const productname = "Nike react phantom run flyknit 2"
describe("Demo Evershop site automation",()=> {  //This is the test suite

    it("Successfully Add Product into the cart", async() =>{ //Test case
        await browser.url('https://demo.evershop.io/')
        await $("//a[@class='search-icon']").click()
        await $("//input[@placeholder='Search']").setValue("Nike"); // enter search keyword
        await browser.keys("Enter") ; //press enter from keyboard
        const productXpath = `//a[contains(@href,'182')]/span[contains(text(),'${productname}')]`
        // await driver.findElement(By.xpath("//a[contains(@href,'182')]/span[contains(text(),'Nike react phantom run flyknit 2')]")).click()
        await $(productXpath).click()
        await browser.pause(2000)
        await $("//a[@href='#' and contains(text(),'S')]").click()
        await browser.pause(2000)
        await $("//a[@href='#' and contains(text(),'Black')]").click()
        await browser.pause(2000)
        // await $("//input[@placeholder='Qty']").clear()
        await browser.pause(2000)
        await $("//input[@placeholder='Qty']").setValue("2")
        await browser.pause(2000)
        await $("//button[@type='button']/span[contains(text(),'ADD TO CART')]").click()
        await browser.pause(2000)
        await $("//a[contains(text(),'VIEW CART (1)')]").click()
        
        await browser.pause(2000)
        await browser.quit()
        
    })

})