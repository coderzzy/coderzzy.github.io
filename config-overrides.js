//override 函数用于包装并修改 CRA(Create React App) 默认的 Webpack 配置
const {
    override,
    addLessLoader,
    addWebpackModuleRule,
    adjustStyleLoaders,
} = require('customize-cra')
const TerserPlugin = require('terser-webpack-plugin')
const { whenProd } = require('@craco/craco')

// 自定义 Webpack 配置函数
const customWebpackConfig = (config) => {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false
    };
    
    // 生产环境添加混淆和压缩配置
    whenProd(() => {
        config.devtool = false; // 禁用source map生成
        config.optimization.minimize = true;
        config.optimization.minimizer = [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                    mangle: true, // 启用代码混淆
                    output: {
                        comments: false,
                        beautify: false, // 禁用美化输出
                    },
                },
            }),
        ]
    })
    
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

