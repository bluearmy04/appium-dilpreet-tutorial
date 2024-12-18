describe('Android find element test', () => {
    it.only('Find element by accessibility id', async() => {
        const appOption = $('~App')
        await appOption.click()

        const actionBar = $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('Find element by class name', async() => {
        const firstClassName = $('android.widget.TextView')

        await expect(firstClassName).toHaveText('API Demos') 
    })

    xit('Find element by xpath', async() => {
        const alertDialouge = $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        await alertDialouge.click()

        const listDialouge = $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]')
        await listDialouge.click()

        const commandOne = $('//android.widget.TextView[@text="Command one"]')
        await commandOne.click()

        const textAssertion = $('android.widget.TextView')
        await expect(textAssertion).toHaveText('You selected: 0 , Command one')
    })

    it('Find element by UIAutomator', async() => {
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    it('Find multiple elements', async() => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []

        const textList = $$('android.widget.TextView')

        for await (const element of textList) {
            actualList.push(await element.getText())
        }

        expect(actualList).toEqual(expectedList)
    })

    xit('Text input field', async() => {
        const viewOption = $('~Views')
        await viewOption.click()

        const autoCompleteOption = $('~Auto Complete')
        await autoCompleteOption.click()

        const screenTopOption = $('~1. Screen Top')
        await screenTopOption.click()

        const inputField = $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]')
        await inputField.addValue('Bangladesh')

        //expect(await inputField.getValue()).toEqual('Bangladesh')
        await expect(inputField).toHaveText('Bangladesh')
    })
})