describe('iOS', ()=>{
    it('Find element by accessibility id', async()=>{
        await $('~Alert Views').click()
        await $('~Simple').click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it('Find element by tag', async()=>{
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText())

        //multiple element
        const textElm = $$('XCUIElementTypeStaticText')
        for await (const elm of textElm) {
            console.log(await elm.getText())
        }
    })

    it('Find element by xpath', async()=>{
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it('Find element by class chain', async()=>{
        const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]'
        await $(`-ios class chain:${alertText}`).click()
        const secureEntry = '**/XCUIElementTypeStaticText[`label CONTAINS "Secure"`]'
        await $(`-ios class chain:${secureEntry}`).click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it('Find element by predicate string', async()=>{
        const alertText = 'value BEGINSWITH[c] "alert"'
        await $(`-ios predicate string:${alertText}`).click()
        const secureEntry = '**/XCUIElementTypeStaticText[`label CONTAINS "Secure"`]'
        await $(`-ios class chain:${secureEntry}`).click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it.only('Search excercise', async()=>{
        await $('//XCUIElementTypeTable/XCUIElementTypeCell[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click()
        await $('//XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click()
        const searchInput = 'type == "XCUIElementTypeSearchField"'
        await $(`-ios predicate string:${searchInput}`).addValue('this course is average')
        await $('~Clear text').click()
        await expect($(`-ios predicate string:${searchInput}`)).toHaveText('')
    })
})