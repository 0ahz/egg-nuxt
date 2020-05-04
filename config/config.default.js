'use strict';

/**
 * egg-nuxt default config
 * @member Config#nuxt
 * @property {String} SOME_KEY - some description
 */
exports.nuxt = {
  dev: process.env.NODE_ENV !== 'production',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500,
  },
};
