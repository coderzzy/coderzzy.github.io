//override 函数用于包装并修改 CRA(Create React App) 默认的 Webpack 配置
const {
    override,
    addLessLoader,
    addWebpackModuleRule,
    adjustStyleLoaders,
    addPostcssPlugins
} = require('customize-cra')

module.exports = override(
    //addLessLoader 函数用于在 Webpack 配置中添加 Less 支持
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true, //启用 Less 支持 JavaScript 特性，通常用于引用 JavaScript 中的变量和函数。
            relativeUrls: false, //禁用相对路径 URL，通常在构建后的 CSS 文件中使用绝对路径的 URL。
            modifyVars: {}, //修改 Less 变量
        }
    }),
    addPostcssPlugins([
        require('tailwindcss'),
        require('autoprefixer'),
    ]),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
    }),
    // addWebpackModuleRule({
    //     test: /\.module\.less$/,
    //     exclude: /node_modules/,
    //     use: [
    //         'style-loader',
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 modules: {
    //                     localIdentName: '[local]_[hash:base64:6]',
    //                 },
    //             },
    //         },
    //         'less-loader',
    //     ],
    // })
)

