const MainPage = require('./main.page.js')
const PostedPage = require('./posted.page.js')



function page(name) {
    const items = {
        main: new MainPage(),
        posted: new PostedPage()
    }
    return items[name]
}

module.exports = {
    MainPage,
    PostedPage,
    page
}