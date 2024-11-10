class Login{




    get loginButton(){
        return $("//a[@href='/account/login']")
    }

    get loginEmail(){
        return $("//input[@name='email']")
    }

    get loginPassword(){
        return $("//input[@name='password']")
    }

    get loginSubmit(){
        return $("//button[@type='submit']")
    }




}

module.exports = new Login();