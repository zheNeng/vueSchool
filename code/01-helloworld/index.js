const HelloWorld = Vue.component('hello-world', Vue.extend({
    data(){
        return {
            hello: "helloworld"
        }
    },
    render(h){
        return h('div', {}, this.hello)
    }
}))

new Vue({
    render: h => h(HelloWorld) 
}).$mount('#app1')

new Vue({
    el: '#app2',
    render: h => h(HelloWorld)
})
