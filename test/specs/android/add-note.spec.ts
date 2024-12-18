import { AddNoteScreen } from "../screenObjects/android/add-note-screen"
import { EditNoteScreen } from "../screenObjects/android/edit-note-screen"
import { HomeScreen } from "../screenObjects/android/home-screen"

let homeScreen: HomeScreen
let addNoteScreen: AddNoteScreen
let editNoteScreen: EditNoteScreen

describe('Add notes', ()=>{
    before(()=>{
        homeScreen = new HomeScreen();
        addNoteScreen = new AddNoteScreen();
        editNoteScreen = new EditNoteScreen();
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
})