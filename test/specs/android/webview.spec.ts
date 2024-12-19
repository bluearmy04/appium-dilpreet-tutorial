import { HomeScreen } from "../screenObjects/android/home-screen"

let homeScreen: HomeScreen

describe('Webbrowser access', ()=>{
    before(()=>{
        homeScreen = new HomeScreen();
    })
    it('Access external link & verify content on the browser', async()=>{
        await homeScreen.skipTutorial()
        await homeScreen.selectNavMenuOption('Like us on Facebook')

        //console.log('Available contexts:', await driver.getContexts());
        await driver.switchContext('WEBVIEW_chrome')
        //console.log(await driver.getContext())
        
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain("facebook")
        await expect($('h1 span')).toHaveText('ColorNote')

        await homeScreen.selectNavMenuOption('Trash Can')
        await driver.back()
        //await homeScreen.selectNavMenuOption('Notes')
    })
})