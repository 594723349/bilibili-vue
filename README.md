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

    git reflog  查看提交版本
    git reset --hard [name] 回滚

## **1.2项目操作**
    ```
    安装依赖
    npm install

    开发环境运行
    npm run dev

    编译
    npm run build

    检查和修复
    npm run lint
    ```

## **2.项目搭建思路**
    1.搭建好项目框架
        技术 
            elememtui  
                上手难度低   轻量级  能够充分利用 Vue 3 的新特性和性能优化   使用经验
            axios
                兼容性更好  提供丰富API，拦截，配置    复杂网络请求更容易管理和维护   处理错误能力更强大（拦截器） 自动数据转json 更容易并发 中间状态方便检测请求的生命周期   
           polyfill
                兼容浏览器  运行时运用，不需要整个编译流程  轻量级  修复特定问题
           babel
                转译和优化  可集成其他转译器，如typescript  静态分析和优化功能  支持插件和预设，通过配置可以契合各种复杂项目    庞大生态系统，支持许多插件
           sass
           eslint+prettier
                确保代码的一致性和可维护性  代码质量检查
           typescript
                使得代码更易于理解和维护    提高代码质量、减少运行时错误
           vite
                原生 ES 模块的特性，实现了更快的冷启动和热模块替换（HMR）速度       按需导入，提高了页面加载速度        使用原生 ES 模块，减少模块转换的开销
                基于插件，构建配置更简洁而灵活      配置文件相对较少，更加轻量      内置了对一些常见 CSS 预处理器（如 Sass、Less）的支持    对 TypeScript 开箱即用
                适合简单的项目
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
        公共组件：
            导航栏
                主页

        页面
            首页


## **3.问题搜集**   
    1.koroFileHeader  如何生效
        头部文件注释 ctrl+win+i
        方法注释 ctrl+win+t
    2. "any" 的表达式不能用于索引类型 "{}"
        Record<string, object>  给对象属性和值定义明确类型
    3.tsconfig,viteConfig,vueConfig的配置重合问题，有什么区别
        vite和cli功能重合 用vite创建
    4.routes = global.concat(routes) 报错的问题 
        global没有定义为outeRecordRaw类型的数组
    5.vite创建项目后，依赖导入不了
        npm install 安装依赖包
## **4.设计思想**  
    使用pinia 
        基于组合api，使用函数暴露
    api
        类型定义 和 接口  统一在一个目录
    request
        axios返回的data 定义类型
    函数
        功能追求原子性
    element-plus
        安装组件插件，不用全局导入，直接使用标签，vite会自动导入
    hook
        聚合函数功能
    使用mock
    vite中env的使用
    ultis中
        constant dictionary request 放在一个目录
    项目单独设置 .vscode
    使用pnpm

