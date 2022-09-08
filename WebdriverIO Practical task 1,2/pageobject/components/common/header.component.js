const BaseComponent = require('./base.component.js');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.header')
    }
    get apiBtn() {
        return this.rootEl.$('[href="/doc_api"]')
    }
    get toolsBtn() {
        return this.rootEl.$('[href="/tools"]')  
    }
    get faqBtn() {
        return this.rootEl.$('[href="/faq"]')
    }
    get loginBtn() {
        return this.rootEl.$('[href="/login"]')
    }
    get signupBtn() {
        return this.rootEl.$('[href="/signup"]')
    }
}

module.exports = HeaderComponent;