import { config as sharedConfig } from './wdio.shared.conf'; // Import as named export
import 'dotenv/config'
// Extend shared config with Android-specific configurations
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    specs: ['../test/specs/android-findElements.spec.ts'],
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '13.0',
            'appium:deviceName': 'Google Pixel 7',
            'appium:automationName': 'UiAutomator2',
            'appium:app': "bs://da9407e40a1e6cc8106b21d163c55aba9dd27235",
            'appium:autoGrantPermissions': true,
        },
    ],
    services: ['browserstack']
};
