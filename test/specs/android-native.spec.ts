describe('Android Native Feature Tests', ()=>{
    it('Access an activity directly', async() => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        await driver.pause(3000)

        await expect($('//*[@text="List dialog"]')).toExist()
    })

    it('Working with dialog box', async()=>{
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        await $('~OK Cancel dialog with a message').click()

        //accept alert
        await driver.acceptAlert()

        //dismiss alert
        //await driver.dismissAlert()

        //get alert text
        //await driver.getAlertText()

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()
    })

    it('Vertical scrolling' , async()=>{
        await $('~App').click()
        await $('~Activity').click()
        //scroll to end(not so stable)
        //$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        //await $('~Secure Surfaces').click()
        
        //scroll text into view - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
        
        await expect($('~Secure Dialog')).toExist()
    })

    it('Horizontal scrolling' , async()=>{
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1')

        //horizontal scrolling
        $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(3000)
        $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await driver.pause(3000)
    })

    it('Scrolling quiz' , async()=>{
        const selectedDate = '1-10-2025'
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.DateWidgets1')

        await $('~change the date').click()
        //horizontal scrolling
        $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiSelector().text("10")').click()
        await $('//*[@resource-id="android:id/button1"]').click()
        await expect($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()).toContain(selectedDate)
    })
})