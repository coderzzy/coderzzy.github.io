// 在ts项目中，给.less文件加上declare
declare module '*.less' {
    const classes: { [key: string]: string };
    export default classes;
}