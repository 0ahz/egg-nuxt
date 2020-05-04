'use strict';

const mock = require('egg-mock');

describe('test/nuxt.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nuxt-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nuxt')
      .expect(200);
  });
});
