# path-judge
judge the path is absolute path or relative path and some extra function.

--------------

## Install

```
npm install path-judge --save
```

## Getting start

```
pathJudge = require 'path-judge'
```

### API Demo

```
###
# @param path {string}  the path string.
# @return {boolean} if the path is absolute return true else return false
###
pathJudge.isAbsolute(path)
```

```coffeescript
###
# @param path {string}  the path string.
# @return {boolean} if the path is relative return true else return false
###
pathJudge.isRelative(path)
```

```
###
# Get the file absolute path base on process.cwd()
# @param filePath {string}
# @return {string}
#
# if filePath is relative path, the function return path.resolve(process.cwd(), filePath)
# if filePath is absolute path, the function return filePath
###
pathJudge.getFilePathBaseOnProcess(filePath)
```

```
###
# Get the file absolute path base on __dirname
# equals ==> path.resolve(__dirname, filePath)
# @param filePath {string}
# @return {string}
#
# if filePath is relative path, the function return path.resolve(__dirname, filePath)
# if filePath is absolute path, the function return filePath
###
pathJudge.getFilePathBaseOnRequire(filePath)
```

## LICENCE

  MIT
  
## History

#### 0.0.2

Add 2 functions.

#### 0.0.1

init