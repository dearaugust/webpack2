#模块化开发

- 请看 package.json 文件

- "scripts": {
  "build":"./node_modules/.bin/webpack src/index.js build/bundle.js --watch"
},   监听

- 请看 webpack.config.js 文件

- publicPath: 'build/' //加公共路径

## bable 支持 JSX语法
- npm i --save react react-dom  //单独装 react 包
- npm install --save-dev babel-preset-react

## CSS 支持
- npm i --save-dev style-loader css-loader

## 自动前缀 支持
- npm i -D postcss-loader
- npm i -D autoprefixer  //

## 打包CSS 文件
- npm install --save-dev extract-text-webpack-plugin

## HTML 打包 简化了HTML文件的创建，以便为您的webpack包提供服务
- npm install --save-dev html-webpack-plugin

## 装暴露全局变量 包
- npm i -D expose-loader
```js
  {
    test:require.resolve('jquery'),
    use: [{
      loader: 'expose-loader',
      options: '$'
    }]
  }
```

## 在执行 bundle.js 时删除
- npm i -D rimraf
```json
  "scripts": {
    "build": "rimraf build && ./node_modules/.bin/webpack"
  },
```
# 搭建开发环境
- npm i -D webpack-dev-server
```json
"scripts": {
"build": "rimraf build && ./node_modules/.bin/webpack",    /*生产环境*/
  "start": "./node_modules/.bin/webpack-dev-server"  /*开发环境*/
},
```
## 自动打开浏览器包
- npm i -D open-browser-webpack-plugin
