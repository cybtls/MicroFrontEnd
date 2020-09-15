module.exports = {
    devServer: {
        port: 9999,
    },
    configureWebpack: {
        devtool: 'none', // 不打包sourcemap
        output: {
            library: "singleVue", // 导出名称
            libraryTarget: "window", //挂载目标
        }
    },
}