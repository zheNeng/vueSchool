app = document.querySelector('#app')

const HelloWorld = Vue.component('hello-world', {
    render(h){
        return h('div', 'helloworld')
    }
})

new Vue({
    render: h => h(HelloWorld) 
}).$mount(app)