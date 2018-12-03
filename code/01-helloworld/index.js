const HelloWorld = Vue.component('hello-world', {
    render(h){
        return h('div', {}, 'helloworld')
    }
})

new Vue({
    render: h => h(HelloWorld) 
}).$mount('#app1')

new Vue({
    el: '#app2',
    render: h => h(HelloWorld)
})
