# Zzy的博客页

## 项目结构
- 项目框架
    - React && Typescript
- github的部署相关
    - gh-pages
- webpack配置相关
    - customize-cra && react-app-rewired
- css样式拓展
    - less
- 组件库: 
     - Ant Design
- Markdown渲染
    - react-markdown

## 项目运行
### 项目启动
```
npm install && npm start 
```

### 部署 
```
npm run deploy
```

## 一些特殊处理
### SEO
- github page，只支持静态 page，所以用 404 fallback 的方式支持 BrowserRouter
- 为了支持 SEO，使用 react-snap 进行预渲染，得到 html 静态页面，目的是为了让 404 fallback 的时候，爬虫能拿到 html 内容
- Google Search Console 上，添加 sitemap，以及使用【网址检查】进行更新索引

