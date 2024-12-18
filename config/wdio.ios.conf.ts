import { config as sharedConfig } from './wdio.shared.conf'; // Import as named export
import * as path from 'path';

// Extend shared config with iOS-specific configurations
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    port: 4723,
    specs: ['../test/specs/ios/ios-todo-item.spec.ts'],
    capabilities: [
        {
            'appium:platformName': 'iOS',
            'appium:platformVersion': '18.1',
            'appium:deviceName': 'iPhone 16 Pro Max',
            'appium:automationName': 'XCUITest',
            'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
        },
    ],
    services: ['appium']
};
