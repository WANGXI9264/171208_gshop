import Vue from 'vue'
import app from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(app),
    router
})