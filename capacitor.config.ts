import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moaz.memoriesSaver',
  appName: 'Memories Saver',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
