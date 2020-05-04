# egg-nuxt

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-nuxt 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.nuxt = {
  enable: true,
  package: 'egg-nuxt',
};
```

## 使用场景

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

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg-nuxt issues](https://github.com/0ahz/egg-nuxt/issues) 异步交流。

## License

[MIT](LICENSE)
