import { Selector } from 'testcafe';

//parse argument options
import minimist from 'minimist';

//Load libraries to load and read config files
const fs = require('fs');
const yaml = require('js-yaml');

//const login = new Login()

//extracts values from the command line to then retrieve the relevant config files
//const args = minimist(process.argv.slice(2));
//const env = (args.env != undefined) ? args.env : "uat";
//const locale = (args.locale != undefined) ? args.locale : "AU";

//Load the config relevant to the supplied environment variable.
const config = yaml.safeLoad(fs.readFileSync(__dirname + "/config.yml", "utf8"));

//Load the page
fixture`Blaze Demo`
//${env} ${locale}
    .page `${config.url}`

 
test('Find flights', async t => {
    //Maximize the window prior to execution. This command will not be executed in headless mode
    await t.maximizeWindow();

    //Perform the Login process
    //await login.loginUser(t, config.webusername, config.webpassword);
})