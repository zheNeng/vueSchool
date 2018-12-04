# 这个是一个 hello word案例

我们不考虑打包工具  
来写一个vue  
  
webpack的作用 就是帮助我们的代码装换成浏览器认识的样子

## 源码入门 摆脱 webpack

下面我用原始的方法来写一个hello world

```javascript
const HelloWorld = Vue.component('hello-world', {
    render(h){
        return h('div', {}, 'helloworld')
    }
})

new Vue({
    render: h => h(HelloWorld)
}).$mount('#app1')
```

看到这里很多人就不懂了 我写的vue不是这样的啊

```vue
<template>
    <div style="height: 100%">
        helloworld
    </div>
</template>
<script>
</script>
```

其实你们都被 webpack骗了  
这个编译之前的代码 编译之后就是我们用原生方法写的样子  

编译过程 我放在vue-loader的时候详细讲解  

template=createElement

## createElement源码解析

源码地址在 vue(git clone)/src/core/vdom/create-element.js  
vue的源码

```javascript
export function createElement (
  context: Component, // vue的实例
  tag: any, // 我们传入的标签
  data: any, // 我们呢传入的数据
  children: any, // 下面的子元素
  normalizationType: any,
  alwaysNormalize: boolean
): VNode | Array<VNode> {
  // h('div', {}, 'helloworld') == h('div', 'helloworld')
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE
  }
  return _createElement(context, tag, data, children, normalizationType)
}
```

源码解析到这里