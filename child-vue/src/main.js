import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue';//引入single-spa-vue

//原来的
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')

//将原来的渲染封装一层，方便复用
const vueOptions = {
    //挂载到父项目的哪个元素
    el: "#single-spa-vue",
    router,
    render: h => h(App)
};

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

//当只作为自己运行，不是作为子项目的时候
if (!window.singleSpaNavigate) {
    delete vueOptions.el;
    //挂载到项目本身
    new Vue(vueOptions).$mount('#app');
} else {
    //当作为子项目的时候，需要这个来修改加载路径，不然子项目加载js时会以父项目的端口去加载
    __webpack_public_path__ = "http://localhost:9999/"
}


//single-spa的规定/协议 需要导出的三个方法
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;