# egg-nuxt

<!--
Description here.
-->

## Install

```bash
$ npm i egg-nuxt --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nuxt = {
  enable: true,
  package: 'egg-nuxt',
};
```

## Configuration

```js
// config/config.default.js
module.exports = (appInfo) => {
  // ...
  // https://nuxtjs.org/guide/configuration
  config.nuxt = {
    srcDir: path.join(appInfo.baseDir, './client'),
    modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
    ],
    axios: {
      baseURL: 'http://127.0.0.1:7001',
    },
  };
  // ...
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/0ahz/egg-nuxt/issues).

## License

[MIT](LICENSE)
