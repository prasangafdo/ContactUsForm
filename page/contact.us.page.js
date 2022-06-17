class ContactUsPage {

    get lblContact(){
        return $("//h3[text()='Contact']")
    }
    get txtName(){
        return $('name')
    }
    get lblEmail(){
        return $('email')
    }
    get txtPhone(){
        return $('phone')
    }
    get lblWebSite(){
        return $('url')
    }
    get txtMessage(){
        return $('message')
    }
    get btnSubmit(){
        return('#contact-submit')
    }










    async navigateToContactForm(){
        await browser.url('https://contact-prasanga.000webhostapp.com/form.php') //parameterize this later
    }
}

module.exports = new ContactUsPage()