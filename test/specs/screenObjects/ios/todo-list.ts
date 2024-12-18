export class ToDoListScreen{
    private createListButton = $('//*[@name="Create list"]')
    private listTitleInput = $('//*[@value="List Name"]')
    private createButton = $('~Create')
    private firstList = $(`-ios class chain:**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeOther[1]/XCUIElementTypeOther`)

    public async createNewList(listTitle: string){
        await this.createListButton.click()
        await this.listTitleInput.addValue(listTitle)
        await this.createButton.click()
    }

    public async openFirstList(){
        await this.firstList.click()
    }
}