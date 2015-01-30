(function() {
  var isAbsolute, isWinPlatform, _os, _path;

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

}).call(this);
