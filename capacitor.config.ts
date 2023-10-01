import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.playe.worktimer',
  appName: 'work-timer-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
