export class ToDoItemScreen{
    private createItemButton = $('//*[@name="Create item"]')
    private titleInput = $('//XCUIElementTypeTextField[@value="Title"]')
    private dueInput = $('-ios predicate string: value == "Due"')
    private monthsDayInput = $('~18')
    private outsideDatePicker = $('//XCUIElementTypeWindow[@index=2]')
    private createButton = $('~Create')

    public async addItem(itemTitle: string){
        await this.createItemButton.click()
        await this.titleInput.addValue(itemTitle)
        await this.dueInput.click()
        await this.monthsDayInput.click()
        await this.outsideDatePicker.click()
        await this.createButton.click()
    }
}