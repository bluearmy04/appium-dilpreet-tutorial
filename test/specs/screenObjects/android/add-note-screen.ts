export class AddNoteScreen{

    public addNoteButton = $('//*[@text="Add note"]')
    private textOption = $('//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]')

    public async addTextNote(){
        await this.addNoteButton.click()
        await this.textOption.click()
    }

}