# path-judge
判断路径是否为绝对路径或者相对路径。另外增加一些关于path常用函数。

--------------

## 安装

```
npm install path-judge --save
```

## 使用

```
pathJudge = require 'path-judge'
```

### API说明

```
###
# @param path {string}  需要判断的路径
# @return {boolean} 绝对路径返回true 否则false
###
pathJudge.isAbsolute(path)
```

```coffeescript
###
# @param path {string}  需要判断的路径
# @return {boolean}   相对路径返回true 否则false
###
pathJudge.isRelative(path)
```

```
###
# 获取基于执行  环境   process.cwd()的文件的绝对路径。
# @param filePath {string}
# @return {string}
#
# 如果是相对路径返回值相当于 path.resolve(process.cwd(), filePath)
# 如果是绝对路径返回参数本身
###
pathJudge.getFilePathBaseOnProcess(filePath)
```

```
###
# 获取基于执行  当前调用的文件夹  __dirname 的文件的绝对路径。
# equals ==> path.resolve(__dirname, filePath)
# @param filePath {string}
# @return {string}
# 如果是相对路径返回值相当于 path.resolve(__dirname, filePath)
# 如果是绝对路径返回参数本身
###
pathJudge.getFilePathBaseOnRequire(filePath)
```

## LICENCE

  MIT
  
## History

#### 0.0.2

增加两个额外的方法

#### 0.0.1

初始化