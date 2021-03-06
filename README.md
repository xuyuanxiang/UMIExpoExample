# UMIExpoExample

[umi-react-native](https://github.com/xuyuanxiang/umi-react-native#readme)示例工程。

当前 master 分支最新代码集成了：

- [DvaJS](https://dvajs.com/)
- [@ant-design/react-native](https://rn.mobile.ant.design/index-cn)
- [react-navigation](https://reactnavigation.org/)

**需要了解如何使用[expo](https://expo.io/learn)开发 RN 应用。**

你可以使用**UMIExpoExample**作为模板，[快速开始](#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)业务开发；

也可以从零开始徒手搭建，在[变更记录](#%E5%8F%98%E6%9B%B4%E8%AE%B0%E5%BD%95)中追溯每一步代码变动的内容。

## 目录

- [快速开始](#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
- [变更记录](#%E5%8F%98%E6%9B%B4%E8%AE%B0%E5%BD%95)
  - [0.0.1-初始工程](#001-%E5%88%9D%E5%A7%8B%E5%B7%A5%E7%A8%8B)
  - [0.1.0-安装 umi 和 umi-preset-react-native](#010-%E5%AE%89%E8%A3%85-umi-%E5%92%8C-umi-preset-react-native)
  - [1.0.0-集成 DvaJS](#100-%E9%9B%86%E6%88%90-dvajs)
  - [1.1.0-集成 @ant-design/react-native](#110-%E9%9B%86%E6%88%90-ant-designreact-native)
  - [1.2.0-集成 react-navigation](#120-%E9%9B%86%E6%88%90-react-navigation)

## 快速开始

全局安装 expo-cli:

```npm
yarn global add expo-cli
```

将 UMIExpoExample clone 到本地后，进到工程根目录安装依赖：

```npm
yarn
```

启动 watch 进程，监听文件变动，重新生成中间代码：

```npm
yarn watch
```

另启一个终端，启动 expo：

```npm
yarn start
```

## 变更记录

### 0.0.1-初始工程

使用`expo init`得到初始代码：[0.0.1](https://github.com/xuyuanxiang/UMIExpoExample/tree/0.0.1)

UMIExpoExample 在创建时，使用的是第一个模板：

![](https://cdn.xuyuanxiang.me/initial_template_a02ffdb8.png)

### 0.1.0-安装 umi 和 umi-preset-react-native

```npm
yarn add umi umi-preset-react-native --dev
```

**修改 package.json 文件：**

```diff
{
-  "main": "node_modules/expo/AppEntry.js",
+  "main": "index",
  "scripts": {
+   "watch": "umi g rn --dev",
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  }
}
```

代码：[0.1.0](https://github.com/xuyuanxiang/UMIExpoExample/tree/0.1.0) 。

查看变更内容：

- [compare/0.0.1...0.1.0](https://github.com/xuyuanxiang/UMIExpoExample/compare/0.0.1...0.1.0)

### 1.0.0-集成 DvaJS

```npm
yarn add @umijs/plugin-dva --dev
```

代码：[1.0.0](https://github.com/xuyuanxiang/UMIExpoExample/tree/1.0.0)。

查看变动内容：

- [compare/0.1.0...1.0.0](https://github.com/xuyuanxiang/UMIExpoExample/compare/0.1.0...1.0.0)

### 1.1.0-集成 @ant-design/react-native

**需要使用 expo 安装 `expo-font`和`@ant-design/react-native`：**

```npm
expo install expo-font @ant-design/react-native && yarn add umi-plugin-antd-react-native --dev
```

_`expo-font`用来加载`@ant-design/react-native`的字体图标。_

代码：[1.1.0](https://github.com/xuyuanxiang/UMIExpoExample/tree/1.1.0)。

查看变动内容：

- [compare/1.0.0...1.1.0](https://github.com/xuyuanxiang/UMIExpoExample/compare/1.0.0...1.1.0)

### 1.2.0-集成 react-navigation

**需要使用 expo 安装所有 react-navigation 的依赖：**

```npm
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view && yarn add umi-preset-react-navigation --dev
```

代码：[1.2.0](https://github.com/xuyuanxiang/UMIExpoExample/tree/1.2.0)。

查看变动内容：

- [compare/1.1.0...1.2.0](https://github.com/xuyuanxiang/UMIExpoExample/compare/1.0.0...1.2.0)
