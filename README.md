# bilibili-vue
# **项目总览** 
## **1.git操作**
    
    git add * 提交所有文件
    git commit -m "这一次提交的描述"

    建立分支
    $ git checkout -b dev/features/hotfix/list

    当在分支进行开发完成、测试通过后，需要将版本发布，或者与主干合并时，应该

    git checkout main ---切换主干
    git status / git branch ---处在的位置
    git merge ${name}  ---需要合并的分支

    git push origin main    push到远程仓库

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
