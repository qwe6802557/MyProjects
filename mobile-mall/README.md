# obc-react

asiainfo obc FE react 方案

## 开发环境

* [download](node https://nodejs.org/en/download/) - node^8.10.0、npm^6.0.0

### 安装依赖

```
//到达你的项目目录
cd project

//安装依赖
npm install

```

### 运行

```
//启动
$ npm start

//发布
$ npm run build

//测试
$ npm run test
```

### 项目结构
```
project
	├── config
	│		├──	paths.js
	│		├──	downloadIconFontFile.js
	│		├──	config.custom.js
	│		└──	webpack.config.custom.js
	├── public
	│		├──	index.html
	│		└──	manifest.json
	├── scripts
	├── src
	│		├──	components
	│		│		├──	common
	│		│		├──	layout
	│		│		└──	...other component
	│		├──	public
	│		│		├──	js
	│		│		├──	style
	│		│		└──	img
	│		├──	redux	
	│		│		├──	middleware
	│		│		├──	models
	│		│		├──	config.js
	│		│		├──	createStore.js
	│		│		└──	localstorageStatesConfig.js
	│		├──	router	
	│		│		└──	index.js
	│		├──	App.js
	│		└──	index.js
	├── .babelrc
	└── .gitignore		
```

### 项目结构说明

- `config` create-react-app 默认配置和自定义配置
	- `paths.js` 路径相关配置
	- `downloadIconFontFile.js` iconfont下载脚本
	- `config.custom.js` 自定义参数配置文件
	- `webpack.config.custom.js` 自定义webpack配置
- `public` create-react-app 公共资源目录(非应用逻辑开发公共资源目录)
	- `index.html` 
	- `manifest.json` 资源映射
- `scripts` create-react-app 启动相关
- `src` 应用逻辑开发目录
	- `components` 组件
	- `public` 公共资源目录
	- `redux` react-redux
		- `middleware` redux 自定义中间件目录
		- `models` redux reducers action 样板代码编写目录
		- `config.js` redux 相关配置
		- `createStore.js` 创建redux store 入口
		- `localstorageStatesConfig.js` 统一管理处理标注的redux state 存储到localstorage配置文件
	- `router` 路由相关配置
		
### 开发约定

- 项目健壮性约定
	- 组件中含route组件的位置，请使用 `@common/catchErrorBoundary` 错误捕获组件包裹，防止整个应用垮掉或带来的风险操作。
	- 子路由components通过 `@common/routerLoadable` 做分片处理并且统一页面的加载状态展示。

- webpack约定
	- webpack配置功能的新增在 `project/config/webpack.config.custom.js` 下进行。
	- 有路径更改或者发布位置改变的在 `project/config/paths.js` 中 resolveApp 方法中进行配置，在非特殊情况下不去改动配置逻辑。
	- 在 `config.custom.js` 中进行项目自定义项的参数配置。如：iconfont CDN地址的配置（注意ui对iconfont每次改动都会生成新的CDN地址，记得及时替换哟。）

- 目录约定
	- 应用逻辑开发的公共资源在 `project/src/public` 下，而非 `project/public` 下。
	- 公共components开发目录在 `project/src/components/common`。
	- 不同布局类型的页面入口统一从 `project/src/components/layout` 开始。

- 公共组件约定
	- 组件开发需带上 `prop-types` 进行类型管控。
	- 拓展第三方组件时编写的资源（less、img）集中到到自定义组件下进行管理
	
- redux约定
	- action、reducer模版代码统一在models目录中用 `redux-action` 方案进行编写---定义action type格式为 `filename_key` ，防止不同文件action type重复定义引起的不可预估的错误。使用时redux-action会将它转换成驼峰形式。
	- models 中 action由 `export const actiontor` 导出,reducer由 `export defualt` 导出。风格参照 `ducks-modular-redux` 提议 结合redux-actions的拓展。
	- reducer `@/models/index.js` 下进行收集，如`export complex from './complex.js';`。
	- 需要进行缓存的状态值可以通过 `@redux/localstorageStatesConfig.js` 下进行配置。
	- 异步请求使用统一归纳到redux models `异步action` 中，为页面增加progress-bar状态。
	
### 注意事项

- 因为 `antd` 的 `Icon` 组件加载icon图标是直接引用的 `dist.js` 整个包，所以造成项目体积变大。当我们只使用其中少部分图标时是得不偿失的。最后临时解决方案为：

```
	//通过webpack resolve.alias把antd包内的dist引用指向我们应用文件public/js/icons.js下
	config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(paths.appSrc, 'public', '/js/icons.js');
	//然后再在icons中手动按需加入对应图标文件
	// export what you need
	export {
  		default as SmileOutline
	} from '@ant-design/icons/lib/outline/SmileOutline';
	export {
  		default as MehOutline
	} from '@ant-design/icons/lib/outline/MehOutline';
	// export what antd other components need
	export {
  		default as CloseOutline
	} from '@ant-design/icons/lib/outline/CloseOutline';
```

### 相关文档

* [create-react-app](https://github.com/facebook/create-react-app)
* [react](https://reactjs.org/)
* [react-loadable](https://github.com/jamiebuilds/react-loadable)
* [antd](https://ant.design/index-cn)
* [react-router-dom4](https://reacttraining.com/react-router/web/example/basic)
* [react-redux](https://cn.redux.js.org/docs/react-redux/)
* [redux-actions](https://redux-actions.js.org/introduction)
* [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
* [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar)
* [redux-localstorage-simple](https://github.com/kilkelly/redux-localstorage-simple)
* [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
* [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)
* [react-router-config](https://www.npmjs.com/package/react-router-config)
* [eslint](https://cn.eslint.org)



### 技术栈脑图
* [er.png](../er.png)
	
	
	
	

	
