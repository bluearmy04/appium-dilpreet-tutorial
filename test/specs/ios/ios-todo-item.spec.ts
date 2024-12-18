import { ToDoItemScreen } from "../screenObjects/ios/todo-item"
import { ToDoListScreen } from "../screenObjects/ios/todo-list"

describe('To-do item list', ()=>{
    it('Create to-do items', async()=>{
        const toDoList = new ToDoListScreen()
        const toDoItem = new ToDoItemScreen()
        const listTitle = 'Daily to-do list'
        const itemTitle = 'Buy Jersy'
        
        await toDoList.createNewList(listTitle)
        await toDoList.openFirstList()
        
        await toDoItem.addItem(itemTitle)
        await expect($(`~${itemTitle}`)).toBeExisting()        
    })
})