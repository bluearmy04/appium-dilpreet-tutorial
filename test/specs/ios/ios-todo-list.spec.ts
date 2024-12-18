import { ToDoListScreen } from "../screenObjects/ios/todo-list"

describe('To do list', ()=>{
    it('Create to-do list', async()=>{
        const toDoList = new ToDoListScreen()
        const listTitle = 'Daily to-do list'
        
        await toDoList.createNewList(listTitle)

        await expect($(`~${listTitle}`)).toBeExisting()
    })
})