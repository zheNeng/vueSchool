# 这个是一个 hello word案例

## 源码入门 摆脱 webpack

下面我用原始的方法来写一个hello world
看到这里很多人就不懂了 我写的vue不是这样的啊

```javascript
const HelloWorld = Vue.component('hello-world', {
    render(h){
        return h('div', {}, 'helloworld')
    }
})
```

我们平时不是

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
这一章节我放在vue-loader的时候详细讲解

template=createElement

## createElement源码解析
vue/src/core/vdom/create-element.js

```javascript
export function createElement (
  context: Component,
  tag: any,
  data: any,
  children: any,
  normalizationType: any,
  alwaysNormalize: boolean
): VNode | Array<VNode> {
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

先上个传 没时间了 后面在写