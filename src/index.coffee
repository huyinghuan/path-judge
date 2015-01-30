_path = require 'path'
_os = require 'os'

isWinPlatform = ->
  platform = _os.platform().toUpperCase()
  platform.indexOf('WIN') is 0

exports.isAbsolute = isAbsolute = (path)->
  flag = isWinPlatform()
  if not flag
    return path[0] is '/'
  reg = /^([a-z]|[A-Z])\:/
  reg.test path


exports.isRelative = (path)->
  not isAbsolute path