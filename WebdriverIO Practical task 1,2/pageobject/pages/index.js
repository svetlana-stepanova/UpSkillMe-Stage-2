const MainPage = require('./main.page.js')



function page(name) {
    const items = {
        main: new MainPage()
    }
    return items[name]
}

module.exports = {
    MainPage,
    page
}