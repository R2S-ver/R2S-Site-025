import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://r2s-site-025.pages.dev',

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',

    routing: {
      prefixDefaultLocale: false,
    },
  },

});