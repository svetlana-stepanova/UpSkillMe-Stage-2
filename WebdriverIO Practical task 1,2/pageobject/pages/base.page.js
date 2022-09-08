const HeaderComponent = require('../components/common/header.component.js')

class BasePage {
    constructor(title) {
        this.title = title;
        this.header = new HeaderComponent();
    }

   open (path) {
    browser.url(path)
    browser.maximizeWindow()  /*привязка протокола для загрузки страницы браузера. В параметр функции в качестве аргумента передаём url
                            страницы*/
    }
}

module.exports = BasePage; //позволяет получать доступ к данному объекту для внешних файлов(модулей)