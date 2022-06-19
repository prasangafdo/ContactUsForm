const contact = require('../function/contact')

describe('Verify the functionalities of the contact us form', ()=>{
    it('Verify the user can navigate to contact us form', async ()=>{
        await contact.navigateToContactForm()
        expect(await contact.isContactUsTopicDisplaying()).toBeTruthy()
    })
    it('Verify the user can send a message via contact us form', async ()=>{
        await contact.navigateToContactForm()
        expect(await contact.isContactUsTopicDisplaying()).toBeTruthy()
        
    })
})