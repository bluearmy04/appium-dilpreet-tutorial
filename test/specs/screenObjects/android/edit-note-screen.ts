export class EditNoteScreen{
    public editButton = $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    public screenTitle = $('//*[@text="Editing"]')
    private noteTitle = $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    private notebody = $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    private viewNote = $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    private moreButton = $('~More')
    private deleteButton = $('//*[@text="Delete"]')

    public async addNewNote(title: string, body:string){
        await this.noteTitle.addValue(title)
        await this.notebody.addValue(body)

        await driver.back()
    }

    public async getNoteContent(): Promise<string> {
        return await this.viewNote.getText()
    }

    public async clickMoreButton(){
        await this.moreButton.click()
    }

    public async clickDeleteButton(){
        await this.deleteButton.click()
    }
}