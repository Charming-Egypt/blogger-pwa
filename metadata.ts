/**
 * This is auto generated metadata file, generated at: Mon Nov 18 2024 11:32:30 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
    serviceWorker: {
      source: string;
      scope: string;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"Charming-Egypt/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"ba878a37-3f42-41fe-97f8-b4f18e7b27a1","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"EsPWQ0yBIWyCFeM6WAhS9"}}',
) as Metadata;
