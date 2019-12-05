require('./bootstrap');

window.Vue = require('vue');
import VueRouter from "vue-router";
import App from './App.vue';
import routes from "./routes";


Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: routes,
    components: {App}
});
