const contact = require('../function/contact')

describe('Verify the functionalities of the contact us form', ()=>{
    it('Verify the user can navigate to contact us form', async ()=>{
        await contact.navigateToContactForm()
        expect(await contact.isContactUsTopicDisplaying()).toBeTruthy()
    })
    it('Verify the user can send a message via contact us form', async ()=>{
        await contact.navigateToContactForm()
        expect(await contact.isContactUsTopicDisplaying()).toBeTruthy()
        await contact.enterName('Test name1')
        await contact.enterEmail('test@abc.com')
        await contact.enterPhone('0123456789')
        await contact.enterWebSite('https://www.google.com/')
        await contact.enterMessage('Test message')
        await contact.clickSubmitButton()
    })
})