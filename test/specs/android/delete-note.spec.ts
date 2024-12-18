import { AddNoteScreen } from "../screenObjects/android/add-note-screen"
import { EditNoteScreen } from "../screenObjects/android/edit-note-screen"
import { HomeScreen } from "../screenObjects/android/home-screen"
import { NoteListScreen } from "../screenObjects/android/note-list-screen"

let homeScreen: HomeScreen
let addNoteScreen: AddNoteScreen
let editNoteScreen: EditNoteScreen
let noteListScreen: NoteListScreen

describe('Add notes', ()=>{
    before(()=>{
        homeScreen = new HomeScreen()
        addNoteScreen = new AddNoteScreen()
        editNoteScreen = new EditNoteScreen()
        noteListScreen = new NoteListScreen()
    })

    it('Skip Tutorial', async() => {
        await homeScreen.skipTutorial()
        await expect(addNoteScreen.addNoteButton).toBeDisplayed()
    })

    it('Add note, save changes & verify text', async()=>{
        const noteTitle = 'Club Name'
        const noteBody = 'Chelsea\nArsenal\nMancity\nLiverpool'
        
        await addNoteScreen.addTextNote()
        await expect(editNoteScreen.screenTitle).toBeDisplayed()

        await editNoteScreen.addNewNote(noteTitle, noteBody)

        await expect(editNoteScreen.editButton).toBeDisplayed()
        await expect(await editNoteScreen.getNoteContent()).toEqual(noteBody)
        
        await driver.back()
    })

    it('Delete note', async()=>{
        const firstNoteTitle = await noteListScreen.getFirstNoteTitle()
        await noteListScreen.selectFirstNote()
        await editNoteScreen.clickMoreButton()
        await editNoteScreen.clickDeleteButton()
        await driver.acceptAlert()

        await expect($(`//*[@text="${firstNoteTitle}"]`)).not.toExist()

        await homeScreen.selectNavMenuOption('Trash Can')
        await expect($(`//*[@text="${firstNoteTitle}"]`)).toExist()
    })
})