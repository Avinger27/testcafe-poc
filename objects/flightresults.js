import { Selector } from 'testcafe';

export default class flightresults {

    constructor (){
        //List all the xpaths for the elements for a specific page (Examples below)
        this.table=Selector('.table').find('tbody');

        //this.shop = Selector('.Link-content').withText('Shop')
        //this.Menu = Selector("button").withAttribute("aria-label", "Toggle menu");
        //this.Read = Selector("[data-test-ref='NAV_READ'] > span"); (data-test-refs are a good way to have ensure stable xpaths. Developers have to do some work for this )

    }

    async validateSearchResults (t){
        //Code for a specifc action that is done on an object
        await t
            .expect(this.table).exists;

        const rowCount = await this.table.find('tr').count;
        console.log("Number of search results - " + rowCount);

        const columnCount = await this.table.find('tr').nth(0).find('td').count;
        console.log("Number of search columns - " + columnCount);

        for(let i=0; i < rowCount; i++){
            for(let j=1; j < columnCount; j++){
                let tdText = await this.table.find('tr').nth(i).find('td').nth(j).textContent;
                console.log("flight no - " + tdText);
            }
        }
    }

    async objectfunction2 (t){
        //Code for a specifc action that is done on an object
    }

    async objectfunction_N (t){
        //Code for a specifc action that is done on an object
    }

}