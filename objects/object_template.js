import { Selector } from 'testcafe';

export default class object_template {

    constructor (){
        //List all the xpaths for the elements for a specific page (Examples below)
        

        //this.shop = Selector('.Link-content').withText('Shop')
        //this.Menu = Selector("button").withAttribute("aria-label", "Toggle menu");
        //this.Read = Selector("[data-test-ref='NAV_READ'] > span"); (data-test-refs are a good way to have ensure stable xpaths. Developers have to do some work for this )

    }

    async objectfunction1 (t){
        //Code for a specifc action that is done on an object
    }

    async objectfunction2 (t){
        //Code for a specifc action that is done on an object
    }

    async objectfunction_N (t){
        //Code for a specifc action that is done on an object
    }

}

