
import { env } from './.env';

export const environment = {
  production: false,
  version: env['npm_package_version'] + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['vi-VN', 'en-US', 'fr-FR'],
};
