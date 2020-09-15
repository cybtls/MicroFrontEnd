const { devServer } = require("../child-vue/vue.config");

module.exports = {
    webpack: (config) => {
        config.output.library = "singleReact";
        config.output.libraryTarget = "window";
        config.output.publicPath = "http://localhost:10000/";
        return config;
    },
    devServer: (configFunction) => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost)
            config.port = '10000'
            return config;
        }
    }
}