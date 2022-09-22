const { page } = require('../../pageobject/pages/index.js');
const { waitAndClick } = require('../../utilities/helper')

describe ('Create a New Paste without authorization', () => {
   beforeEach(async () => {
        await page('main').open();
    })

    it ('I Can Win', async () => {

    // * Code: "Hello from WebDriver"  

        await page('main').newPaste.setValue('Hello from webdriverIO')

    //* Paste Expiration: "10 Minutes"

        await page('main').pasteExpiration.click()                     
        await waitAndClick(page('main').setPasteExpiration('tenMin'),2000) 

    //* Paste Name / Title: "helloweb"

        await page('main').pasteName.setValue('helloweb')             

    //* Create New Paste

        await page('main').createNewPaste()
        await expect(browser).toHaveTitleContaining('helloweb')

    })

    it ('Bring It On', async () => {
       
    //* Code

        await page('main').newPaste.setValue( `git config --global user.name "Sheriff in Town"
        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        git push origin master --force`)                                

    //* Syntax Highlighting: "Bash"

        await page('main').syntaxHighlightning.click()
        await waitAndClick(page('main').setSyntaxHighlightning('bash'),2000)                 

    //* Paste Expiration: "10 Minutes"

        await page('main').pasteExpiration.click()                               
        await waitAndClick(page('main').setPasteExpiration('tenMin'),2000)

    //* Paste Name / Title: "how to gain dominance among developers"

        await page('main').pasteName.setValue('how to gain dominance among developers') 
        await page('main').createNewPaste()

    //* Browser page title matches Paste Name / Title

        await expect(browser).toHaveTitleContaining('how to gain dominance among developers')
    
    //* Syntax is suspended for bash    

        await expect(page('posted').leftBtn).toHaveText('Bash')
  
    //* Check that the code matches the one entered in paragraph 2
    
        await expect(page('posted').textArea).toHaveText( `git config --global user.name "Sheriff in Town"
        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        git push origin master --force`)
    }) 
})