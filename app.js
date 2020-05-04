"use strict";

const { Builder } = require('nuxt');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    await new Builder(this.app.nuxt).build();
  }
}

module.exports = AppBootHook;
