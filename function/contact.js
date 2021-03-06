const contactUsPage = require('../page/contact.us.page')

class Contact {
    async enterName(name){
        await contactUsPage.enterName(name)
    }
    async enterEmail(email){
        await contactUsPage.enterEmail(email)
    }
    async enterPhone(phone){
        await contactUsPage.enterPhone(phone)
    }
    async enterWebSite(webSite){
        await contactUsPage.enterWebSite(webSite)
    }
    async enterMessage(message){
        await contactUsPage.enterMessage(message)
    }
    async clickSubmitButton(){
        await contactUsPage.clickSubmitButton()
    }
    async navigateToContactForm(){
        await contactUsPage.navigateToContactForm()
    }
    async isContactUsTopicDisplaying(){
        return await contactUsPage.isContactUsTopicDisplaying()
    }
    async isSuccessMessageDisplaying(){
        return await contactUsPage.isSuccessMessageDisplaying()
    }
    async getSuccessMessageText(){
        return await contactUsPage.getSuccessMessageText()
    }
    async getErrorNameMessageText(){
        return await contactUsPage.getErrorNameMessageText()
    }
    async geErrorEmailMessageText(){
        return await contactUsPage.geErrorEmailMessageText()
    }
    async getErrorPhoneMessageText(){
        return await contactUsPage.getErrorPhoneMessageText()
    }

}

module.exports = new Contact()