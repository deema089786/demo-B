import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dksoftware.demob',
  appName: 'Demo B App',
  webDir: './dist/apps/demo-b-app',
  android:{
    path:'./apps/demo-b-app-android'
  },
  ios:{
    path:'./apps/demo-b-app-ios'
  },
};

export default config;
