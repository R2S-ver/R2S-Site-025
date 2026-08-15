import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rrsuika.pages.dev',

  i18n: {
    locales: ['en', 'zh', 'nl'],
    defaultLocale: 'en',

    routing: {
      prefixDefaultLocale: false,
    },
  },

});