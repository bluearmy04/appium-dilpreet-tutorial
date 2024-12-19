describe('ios webview', ()=>{
    it('working with dynamic webview', async()=>{
        await $('~Webview').click()
        await driver.pause(10000)

        await driver.waitUntil(async()=>{
            const contexts = await driver.getContexts()
            return contexts.length > 1
        }, {timeout: 10000, timeoutMsg: 'Webview not found'})

        //console.log('Available contexts:', await driver.getContexts());
        const contexts = await driver.getContexts()
        await driver.switchContext(contexts[1] as string)

        const subtitletxt = $('.hero__subtitle')
        console.log(await subtitletxt.getText())
        await expect(subtitletxt).toHaveText('Next-gen browser and mobile automation test framework for Node.js')

        await driver.switchContext('NATIVE_APP')
        await $('~Home').click()
        await expect($('//*[@name="WEBDRIVER"]')).toBeDisplayed()
    })
})