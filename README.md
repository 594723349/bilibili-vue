# bilibili-vue
# **项目总览** 
## **1.命令**
## **1.1git操作**
    
    git add * 提交所有文件
    git commit -m "提交的描述"

    建立分支
    git checkout -b dev/features/hotfix/list

    当在分支进行开发完成、测试通过后，需要将版本发布，或者与主干合并时，应该

    git checkout main ---切换主干
    git status / git branch ---处在的位置
    git merge ${name}  ---需要合并的分支

    git push origin main    push到远程仓库

## **1.2项目操作**
    ```
    安装依赖
    npm install

    开发环境运行
    npm run serve

    编译
    npm run build

    检查和修复
    npm run lint
    ```

## **2.项目搭建思路**
    1.搭建好项目框架
        技术 elememtui  axios polyfill scss eslint+prettier typescript vite
        注释快捷键  
            头部注释    ctrl+win+R  
            函数注释    ctrl+win+T
        打包工具插件
            vitejs/plugin-legacy    提供传统浏览器支持
                modernPolyfills     针对现代浏览器的pollfill
                polyfills   针对传统浏览器的polyfill
                additionalLegacyPolyfills   非corejs的polyfill
            vite-plugin-compression     做 gzip 压缩(增强版)
            vite-plugin-rsw     基于 vite 实现的 webAssembly 插件
            autoprefiexer    项目自动增加 css 前缀，兼容各种浏览器
        项目内部基本工具 utils
            全局工具 index
            请求 request    
                axios 拦截器
                code 处理
            常量 constant
            同类型字典  dictionary
    2.项目结构


## **3.问题搜集**   
    1.koroFileHeader  如何生效
        头部文件注释 ctrl+win+i
        方法注释 ctrl+win+t
    2. "any" 的表达式不能用于索引类型 "{}"
        Record<string, object>  给对象属性和值定义明确类型
    3.tsconfig,viteConfig,vueConfig的配置重合问题，有什么区别
    4.routes = global.concat(routes) 报错的问题 
        global没有定义为outeRecordRaw类型的数组