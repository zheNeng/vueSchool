# vueSchool

https://github.com/logictuLuoqi/vueSchool

## 前言

其实 vue 的文档要写出和官网不一样的感觉很难 应为官方文档写的已经很好了  
但目前很少人去读完 vue 的整个文档  
目前现在我看到不少人 说 webpack 不用学 都有人配好了  
入门开始 直接 vuecli 这样其实是不对的  
我准备 以 vue 源码为基础讲 vue 的技术
我们的目标是培养看懂源码的 vue 工程师

## Vue 目录

01 helloworld

### 全局 API

- [ ] extend
- [ ] nextTick
- [ ] set && delete
- [ ] directive
- [ ] filter
- [ ] component
- [ ] use
- [ ] mixin
- [ ] compile

### 选项/数据

- [ ] data
- [ ] props
- [ ] computed
- [ ] methods
- [ ] watch

### 选项/DOM

- [ ] el
- [ ] template
- [ ] render

### 选项 / 生命周期钩子

- [ ] 生命周期钩子

### 选项 / 资源

- [ ] directives
- [ ] filters
- [ ] components

### 选项 / 组合

- [ ] parent
- [x] [mixins](./docs/vue-mixins.md)
- [ ] extends
- [ ] provide / inject

### 选项 / 其它

- [ ] name
- [ ] functional
- [ ] model
- [ ] model

### 实例属性

- [ ] \$data
- [ ] \$props
- [ ] \$el
- [ ] \$options
- [ ] \$parent
- [ ] \$root
- [ ] \$children
- [ ] \$slots
- [ ] \$refs
- [ ] \$isServer
- [ ] \$attrs
- [ ] \$listeners

### 实例方法 / 数据

- [ ] \$watch
- [ ] \$set
- [ ] \$delete

### 实例方法 / 事件

- [ ] \$on
- [ ] \$once
- [ ] \$off
- [ ] \$emit

### 实例方法 / 生命周期

- [ ] \$mount
- [ ] \$forceUpdate
- [ ] \$nextTick
- [ ] \$destroy

### 指令

- [ ] v-text
- [ ] v-html
- [ ] v-show
- [ ] v-if && v-else
- [ ] v-for
- [ ] v-on
- [ ] v-bind
- [ ] v-model
- [ ] v-once

### 特殊属性

- [ ] key
- [ ] ref
- [ ] slot
- [ ] slot-scope
- [ ] scope
- [ ] is

### 内置的组件

- [ ] component 动态组件
- [ ] transition
- [ ] transition-group
- [ ] keep-alive
- [ ] slot

### 服务端渲染

- [ ] 服务端渲染 nuxt

### 概念

- [ ] 双向数据绑定
- [ ] JSX && render
- [ ] vue 响应式原理
- [ ] use TypeScript
- [ ] vue 项目优化点

## Vuex

> [阅读 vuex 源码的思维导图(原图)](http://pdl69gzvn.bkt.clouddn.com/vuex.png)

![阅读 vuex 源码的思维导图](http://pdl69gzvn.bkt.clouddn.com/vuex.png)

### 目录

```js
├── src
│   ├── helpers.js                  辅助函数
│   ├── index.esm.js
│   ├── index.js                    入口
│   ├── mixin.js                    混入 vuexInit
│   ├── module                      class module
│   │   ├── module-collection.js
│   │   └── module.js
│   ├── plugins                     插件
│   │   ├── devtool.js
│   │   └── logger.js
│   ├── store.js                    store install
│   └── util.js                     工具函数
```

- [ ] install 方法
- [ ] class Store
- [ ] Vuex 概念
- [ ] State
- [ ] Getter
- [ ] Mutation
- [ ] Action
- [ ] Module
- [ ] plugins
- [ ] 辅助工具函数
- [ ] 命名空间
- [ ] 时间穿梭

## 代码
