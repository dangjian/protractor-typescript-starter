import { ProtractorBrowser, Config } from 'protractor'
import {SpecReporter, StacktraceOption} from 'jasmine-spec-reporter'
export let config: Config = {
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['./specs/**/*.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: StacktraceOption.PRETTY } }));
  }
}
