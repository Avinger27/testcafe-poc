import { Selector } from 'testcafe';

export default class Home {

    constructor (){
        //List all the xpaths for the elements for a specific page (Examples below)
        this.from=Selector("select[name='fromPort']");
        this.fromOption=this.from.find('option');
        this.to=Selector("select[name='toPort']");
        this.toOption=this.to.find('option')
        this.findflights_btn=Selector("input").withAttribute("value","Find Flights");
        this.searchresult=Selector('h3').withText('Flights from Paris to London:')

        //this.shop = Selector('.Link-content').withText('Shop')
        //this.Menu = Selector("button").withAttribute("aria-label", "Toggle menu");
        //this.Read = Selector("[data-test-ref='NAV_READ'] > span"); (data-test-refs are a good way to have ensure stable xpaths. Developers have to do some work for this )

    }

    async selectfrom (t, from){
        //Code for a specifc action that is done on an object
        await t
            .expect(this.from).ok()
            .click(this.from)
            .click(this.fromOption.withText(from))
            .expect(this.from.value).eql(from);
    }

    async selectto (t, to){
        //Code for a specifc action that is done on an object
        await t
        .expect(this.to).ok()
        .click(this.to)
        .click(this.toOption.withText(to))
        .expect(this.to.value).eql(to);
    }

    async findflights (t, from, to){
        //Code for a specifc action that is done on an object
        await this.selectfrom (t, from);
        await this.selectto(t, to);

        await t
            .expect(this.findflights_btn).ok()
            .click(this.findflights_btn)
            .expect(this.searchresult).ok()
    }
}