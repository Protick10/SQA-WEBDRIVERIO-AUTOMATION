const loginLocators = require('./loginLocators');





class LoginActions{

    async clickOnLogin(){
        await loginLocators.loginButton.click();
    }

    async enterEmail(email){
        await loginLocators.loginEmail.setValue(email);
    }

    async enterPassword(password){
        await loginLocators.loginPassword.setValue(password);
    }

    async clickOnSubmit(){
        await loginLocators.loginSubmit.click();
    }

}

module.exports = new LoginActions(); // Exporting the class instance