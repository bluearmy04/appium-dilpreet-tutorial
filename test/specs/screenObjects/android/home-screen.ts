export class HomeScreen{
    private skipTutorialButton = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    private navMenu = $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')

    public async selectNavMenuOption(selectedOption: string){
        await this.navMenu.click()
        await $(`//*[@text="${selectedOption}"]`).click()
    }
    public async skipTutorial(){
        await this.skipTutorialButton.click()
    }
}