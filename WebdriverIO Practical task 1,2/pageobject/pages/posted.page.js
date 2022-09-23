const BasePage = require('./base.page');

class PostedPage extends BasePage {

    get leftBtn () {
        return $('//div[@class="left"]/a[1]')
    }
    get textArea () {
        return $('ol.bash')
    }

}

module.exports = PostedPage;