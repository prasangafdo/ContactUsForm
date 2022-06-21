class ContactUsPage {

    get lblContact(){
        return $("//h3[text()='Contact']")
    }
    get txtName(){
        return $('[name="name"')
    }
    get txtEmail(){
        return $('[name="email"')
    }
    get txtPhone(){
        return $('[name="phone"')
    }
    get txtWebSite(){
        return $('[name="url"')
    }
    get txtMessage(){
        return $('[name="message"')
    }
    get btnSubmit(){
        return('#contact-submit')
    }

    async isContactUsTopicDisplaying(){
        return await this.lblContact.isDisplayed()
    }
    async enterName(name){
        await this.txtName.setValue(name)
    }
    async enterEmail(email){
        await this.txtEmail.setValue(email)
    }
    async enterPhone(phone){
        await this.txtPhone.setValue(phone)
    }
    async enterWebSite(webSite){
        await this.txtWebSite.setValue(webSite)
    }
    async enterMessage(message){
        await this.txtMessage.setValue(message)
    }
    async clickSubmitButton(){
        await this.btnSubmit.click()
    }







    async navigateToContactForm(){
        await browser.url('https://contact-prasanga.000webhostapp.com/form.php') //parameterize this later
    }
}

module.exports = new ContactUsPage()