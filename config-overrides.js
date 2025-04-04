//override 函数用于包装并修改 CRA(Create React App) 默认的 Webpack 配置
const {
    override,
    addLessLoader,
    addWebpackModuleRule,
    adjustStyleLoaders,
} = require('customize-cra')

// 自定义 Webpack 配置函数
const customWebpackConfig = (config) => {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false
    };
    return config;
};

module.exports = override(
    //addLessLoader 函数用于在 Webpack 配置中添加 Less 支持
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true, //启用 Less 支持 JavaScript 特性，通常用于引用 JavaScript 中的变量和函数。
            relativeUrls: false, //禁用相对路径 URL，通常在构建后的 CSS 文件中使用绝对路径的 URL。
            modifyVars: {}, //修改 Less 变量
        }
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = {
            postcssOptions: {
                ...postcssOptions,
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
            }
        };
    }),
    // 应用自定义 Webpack 配置
    customWebpackConfig
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

