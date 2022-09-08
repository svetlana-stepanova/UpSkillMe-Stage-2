const BasePage = require('./base.page.js')

class MainPage extends BasePage {

    constructor() {
      super('Pastebin.com - #1 paste tool since 2002!')
    }

    get newPaste () { return $('#postform-text')}
    get category () { return $('#select2-postform-category_id-container')}

    /*
      * @param item {'none' | 'cryptocurrency' | 'cybersecurity' | 'fixit'}
    */
    setCategory(item) {
        const selector = {
            none: '//li[text()="None"]',
            cryptocurrency: '//li[text()="Cryptocurrency"]',               
            cybersecurity: '//li[text()="Cybersecurity"]',
            fixit: '//li[text()="Fixit"]'
       }
       return $(selector[item])
    }

    get tags () {return $('.bootstrap-tagsinput')}
    get syntaxHighlightning () { return $('#select2-postform-format-container')}

    /*
      * @param item {'none' | 'bash' | 'c' | 'css'}
    */

    setSyntaxHighlightning(item) {
        const selector = {
            none: '//li[text()="None"]',
            bash: '//li[text()="Bash"]',
            c:'//li[text()="C"]',
            css: '//li[text()="CSS"]'
        }
        return $(selector[item])
    }
    get pasteExpiration () { return $('#select2-postform-expiration-container')} 
    
    /*
      * @param item {'never' | 'burnAfterRead' | 'tenMin' | 'oneHour'}
    */

    setPasteExpiration(item) {
        const selector = {
            never: '//li[text()="Never"]',
            burnAfterRead: '//li[text()="Burn after read"]',
            tenMin: '//li[text()="10 Minutes"]',
            oneHour: '//li[text()="1 Hour"]'
        }
        return $(selector[item])  
    }

    get pasteExposure () { return $('#select2-postform-expiration-container')}
    get folder () { return $('[aria-labelledby=select2-postform-folder_key-container]')}
    get pasteName () { return $('#postform-name')}
    get createNewPasteBtn (){ return $('[type=submit].btn')}

    open() {
       return super.open('https://pastebin.com/')
   }

   createNewPaste() {
    return this.createNewPasteBtn.click()
   }

}

module.exports = MainPage;