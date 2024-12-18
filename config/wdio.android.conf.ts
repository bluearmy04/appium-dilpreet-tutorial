import { config as sharedConfig } from './wdio.shared.conf'; // Import as named export
import * as path from 'path';

// Extend shared config with Android-specific configurations
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    port: 4723,
    specs: ['../test/specs/android/delete-note.spec.ts'],
    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:platformVersion': '15.0',
            'appium:deviceName': 'Pixel 7 API 35',
            'appium:automationName': 'UiAutomator2',
            'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
            'appium:autoGrantPermissions': true,
        },
    ],
    services: ['appium']
};
