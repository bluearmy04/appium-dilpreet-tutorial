export class NoteListScreen{
    private firstNote = $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')

    public async getFirstNoteTitle(): Promise<string>{
        return await this.firstNote.getText()
    }

    public async selectFirstNote(){
        await this.firstNote.click()
    }
}