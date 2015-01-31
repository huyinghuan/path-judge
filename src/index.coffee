_path = require 'path'
_os = require 'os'

isWinPlatform = ->
  platform = _os.platform().toUpperCase()
  platform.indexOf('WIN') is 0

#是否是绝对路径
exports.isAbsolute = isAbsolute = (path)->
  flag = isWinPlatform()
  if not flag
    return path[0] is '/'
  reg = /^([a-z]|[A-Z])\:/
  reg.test path

#是否是相对路径
exports.isRelative = (path)->
  not isAbsolute path


getFilePath = (path, base = "")->
  flag = isAbsolute(path)
  return path if flag
  return _path.resolve(base, path)

#获取基于主进程目录的完整路径
exports.getFilePathBaseOnProcess = (path)-> getFilePath(path, process.cwd())

#获取基于当前引用路径的完整路径 ?如何实现？
exports.getFilePathBaseOnRequire = (path)->
  if module.parent
    requireParentDirctor = _path.dirname module.parent.filename
    return getFilePath(path, requireParentDirctor)