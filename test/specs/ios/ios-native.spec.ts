describe('ios native features', ()=>{
    it('ALert box', async()=>{
        await $('~Alert Views').click()
        await $('~Okay / Cancel').click()

        await $('~OK').click()
        //await driver.dismissAlert()
        console.log(await driver.getAlertText())
        await expect($('~OK')).not.toExist()
    })

    it.only('working with scrollable items', async()=>{
        await $('~Picker View').click()
        const redPicker = $('~Red color component value')
        const bluePicker = $('~Blue color component value')
        const greenPicker = $('~Blue color component value') 

        //await driver.execute('mobile: scroll', {element: await redPicker.elementId, direction: 'down'})
        //await driver.execute('mobile: scroll', {element: await bluePicker.elementId, direction: 'up'})
        await greenPicker.addValue('0')
        await redPicker.addValue('125')
        await bluePicker.addValue('125')
        await driver.pause(20000)
    })
})