import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa';

// 动态加载脚本的方法
const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

//注册微前端服务 第一个子应用
registerApplication(
    // 子应用名称，就是我们vue.config.js里面的导出名称
    'singleVue',
    async () => {
        //加载子项目的js模块，目前这里是先写死，后面会提到如何改造这个
        await runScript('http://127.0.0.1:9999/js/chunk-vendors.js');
        await runScript('http://127.0.0.1:9999/js/app.js');
        return window.singleVue;
    },
    // 路径前面加上 /vue 
    location => location.pathname.startsWith('/vue'),
);
registerApplication(
    // 子应用名称，就是我们vue.config.js里面的导出名称
    'singleReact',
    async () => {
        //加载子项目的js模块，目前这里是先写死，后面会提到如何改造这个
        await runScript('http://127.0.0.1:10000/static/js/bundle.js');
        await runScript('http://127.0.0.1:10000/static/js/0.chunk.js');
        await runScript('http://127.0.0.1:10000/static/js/main.chunk.js');
        return window.singleReact;
    },
    // 路径前面加上 /vue 
    location => location.pathname.startsWith('/react'),
);

start();
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
