const { page } = require('../../pageobject/pages/index.js');

describe ('Create a New Paste without authorization', () => {
    beforeEach(async () =>{
        await page('main').open();
    } )

    it.only ('I Can Win', async () => {
    // * Code: "Hello from WebDriver"  
    
        await page('main').newPaste.setValue('Hello from webdriverIO'); 
        await browser.pause(3000);

    //* Paste Expiration: "10 Minutes"

        await page('main').pasteExpiration.click()                     
        await page('main').setPasteExpiration('tenMin').click()
        await browser.pause(3000);

    //* Paste Name / Title: "helloweb"

        await page('main').pasteName.setValue('helloweb')             
        await browser.pause(3000)

    //* Create New Paste

        await page('main').createNewPaste() 
        await browser.pause(3000)
    })

    it ('Bring It On', async () => {

    //* Code

    await page('main').newPaste.setValue( `git config --global user.name "Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force`)                                        
    await browser.pause(3000)

    //* Syntax Highlighting: "Bash"

    await page('main').syntaxHighlightning.click()
    await page('main').setSyntaxHighlightning('bash').click()                 
    await browser.pause(3000)

    //* Paste Expiration: "10 Minutes"

    await page('main').pasteExpiration.click()                               
    await page('main').setPasteExpiration('tenMin').click()
    await browser.pause(3000)

    //* Paste Name / Title: "how to gain dominance among developers"

    await page('main').pasteName.setValue('how to gain dominance among developers')  
    await browser.pause(3000)
    await page('main').createNewPaste()

    //* Browser page title matches Paste Name / Title

    await expect(browser).toHaveTitleContaining('how to gain dominance among developers')
    await browser.pause(3000)
    
    //* Syntax is suspended for bash    

    await expect($('//a[@href="/archive/bash"]')).toHaveText('Bash')
    await browser.pause(3000)
  
    //* Check that the code matches the one entered in paragraph 2
    
    await expect($('//textarea')).toHaveText(`git config --global user.name "Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force`)
    }) 
})