// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/caliber-related/assess-batches/assess-batches.e2e-spec.ts',
    './e2e/caliber-related/manage-batches-e2e/manage-batches.e2e-spec.ts',
    './e2e/caliber-related/panel-e2e/panel.e2e-spec.ts',
    './e2e/caliber-related/quality-audit/quality-audit.e2e-spec.ts',
    './e2e/caliber-related/reports/reports.e2e-spec.ts',
    './e2e/caliber-related/screening/screening.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1000x573" ]
    }
  },
  directConnect: true,
  baseUrl: 'http://ec2-35-182-210-106.ca-central-1.compute.amazonaws.com',
  // baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 180000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
