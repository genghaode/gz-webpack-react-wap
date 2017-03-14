# 基于React+Webpack+Babel的项目脚手架
## 功能
- 解析jsx
- 解析ES6
- 编译完成自动打开浏览器，多端浏览，多端浏览需要将配置文件中的ip地址改为本机ip地址
- 组件级热更新
- 分离CSS文件
- 代码压缩
- 文件加MD5戳
- mock请求数据模拟
- 支持react-router
- 支持redux
- 引入ant.design mobile
- 示例增加头部，TabBar，首页banner，首页下拉加载列表，登录功能
- 服务器环境下需要配置好接口(/api/getBanner,/api/getItemList,/api/postLogin)

## 使用
- 下载
```
$ git clone https://github.com/genghaode/gz-webpack-react-wap
$ cd gz-webpack-react && npm i
```
- 开发环境
```
$ npm run dev
```
- 生产环境
```
$ npm run build
```
- 服务器端开发环境
```
$ npm run build:dev
```
