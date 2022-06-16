class ContactUsPage {
    get lblContact(){
        return $("//h3[text()='Contact']")
    }
}

module.exports = new ContactUsPage()