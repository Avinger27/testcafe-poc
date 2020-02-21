import { Selector } from 'testcafe';

export default class flightresults {

    constructor (){
        //List all the xpaths for the elements for a specific page (Examples below)
        this.table=Selector('.table').find('tbody');

        //this.shop = Selector('.Link-content').withText('Shop')
        //this.Menu = Selector("button").withAttribute("aria-label", "Toggle menu");
        //this.Read = Selector("[data-test-ref='NAV_READ'] > span"); (data-test-refs are a good way to have ensure stable xpaths. Developers have to do some work for this )

    }

    async validateSearchResults (t, searchData){
        //Code for a specifc action that is done on an object
        await t
            .expect(this.table).exists;

        const rowCount = await this.table.find('tr').count;
        console.log("Number of search results - " + rowCount);

        const columnCount = await this.table.find('tr').nth(0).find('td').count;
        console.log("Number of search columns - " + columnCount);

        for(let i=0; i < rowCount; i++){
            let flight_no = await this.table.find('tr').nth(i).find('td').nth(1).textContent;
            //console.log("flight no - " + tdText);
            let airline = await this.table.find('tr').nth(i).find('td').nth(2).textContent;
            let departs = await this.table.find('tr').nth(i).find('td').nth(3).textContent;
            let arrives = await this.table.find('tr').nth(i).find('td').nth(4).textContent;
            let price = await this.table.find('tr').nth(i).find('td').nth(5).textContent;
            //console.log(searchData[i].flight_no);

            if (flight_no == (searchData[i].flight_no) && airline == (searchData[i].airline) && departs == (searchData[i].departs) && arrives == (searchData[i].arrives) && price == (searchData[i].price)){
                console.log("Details for flight " + flight_no + " are as expected");
            }
        }
    }

}