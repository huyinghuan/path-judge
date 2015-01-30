# path-judge
judge the path is absolute path or relative path

--------------

## Install

```
npm install path-judge --save
```

## Getting start

```coffee-script
pathJudge = require 'path-judge'

###
# @param {string}  the path string.
# @return {boolean} if the path is absolute return true else return false
###
pathJudge.isAbsolute("path/need/judge")


###
# @param {string}  the path string.
# @return {boolean} if the path is relative return true else return false
###
pathJudge.isRelative("path/need/judge")

```

## LICENCE

  MIT