const HeaderComponent = require('../components/common/header.component.js')

class BasePage {
    constructor(title) {
        this.title = title;
        this.header = new HeaderComponent();
    }

   open (path) {
    return browser.url(path)  
    }
}

module.exports = BasePage;