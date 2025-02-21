/// <reference types="@capacitor-community/safe-area" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dksoftware.demob',
  appName: 'Demo B App',
  webDir: './dist/apps/demo-b-app',
  android: {
    path: './apps/demo-b-app-android',
  },
  ios: {
    path: './apps/demo-b-app-ios',
  },
  plugins: {
    SafeArea: {
      enabled: true,
    },
  },
  server: {
    url: 'http://192.168.50.71:4200',
    cleartext: true,
  },
};

export default config;
