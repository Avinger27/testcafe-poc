import { Selector } from 'testcafe';

//parse argument options
import minimist from 'minimist';
import Home from '../objects/Home'
import Results from '../objects/flightresults'

//Request logger config
import { RequestLogger } from 'testcafe'

//Load libraries to load and read config files
const fs = require('fs');
const yaml = require('js-yaml');
const home = new Home();
const results = new Results();



//extracts values from the command line to then retrieve the relevant config files
//const args = minimist(process.argv.slice(2));
//const env = (args.env != undefined) ? args.env : "uat";
//const locale = (args.locale != undefined) ? args.locale : "AU";

//Load the config relevant to the supplied environment variable.
const config = yaml.safeLoad(fs.readFileSync("config.yml","utf8"));
const logger = RequestLogger(`${config.url}`);
const data =require("../data.json")
//__dirname + "/config.yml", "utf8"));

//Load the page
fixture`Blaze Demo`
//${env} ${locale}
    .page `${config.url}`
    .requestHooks(logger);


test('Find flights', async t => {
    //Maximize the window prior to execution. This command will not be executed in headless mode
    await t.maximizeWindow();
    await home.findflights(t, config.from, config.to)
    //Validate the search results
    await results.validateSearchResults(t, data);
    console.log(logger.requests);
    //await login.loginUser(t, config.webusername, config.webpassword);
})