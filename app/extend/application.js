"use strict";

const { Nuxt } = require('nuxt');

const nuxtSymbol = Symbol('Application#Nuxt');

module.exports = {
  get nuxt() {
    const nuxtConfig = this.config.nuxt;
    if (!this[nuxtSymbol] && nuxtConfig) {
      this[nuxtSymbol] = new Nuxt(nuxtConfig);
    }
    return this[nuxtSymbol];
  },
};
