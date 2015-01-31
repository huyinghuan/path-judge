(function() {
  var getFilePath, isAbsolute, isWinPlatform, _os, _path;

  _path = require('path');

  _os = require('os');

  isWinPlatform = function() {
    var platform;
    platform = _os.platform().toUpperCase();
    return platform.indexOf('WIN') === 0;
  };

  exports.isAbsolute = isAbsolute = function(path) {
    var flag, reg;
    flag = isWinPlatform();
    if (!flag) {
      return path[0] === '/';
    }
    reg = /^([a-z]|[A-Z])\:/;
    return reg.test(path);
  };

  exports.isRelative = function(path) {
    return !isAbsolute(path);
  };

  getFilePath = function(path, base) {
    var flag;
    if (base == null) {
      base = "";
    }
    flag = isAbsolute(path);
    if (flag) {
      return path;
    }
    return _path.resolve(base, path);
  };

  exports.getFilePathBaseOnProcess = function(path) {
    return getFilePath(path, process.cwd());
  };

  exports.getFilePathBaseOnRequire = function(path) {
    var requireParentDirctor;
    if (module.parent) {
      requireParentDirctor = _path.dirname(module.parent.filename);
      return getFilePath(path, requireParentDirctor);
    }
  };

}).call(this);
