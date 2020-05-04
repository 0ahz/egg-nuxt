'use strict';

module.exports = (options) => {
  return async function nuxt(ctx, next) {
    await next();
    ctx.status = 200;
    ctx.respond = false; // Mark request as handled for Koa
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    ctx.app.nuxt.render(ctx.req, ctx.res);
  };
};
