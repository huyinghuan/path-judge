judge = require './src/index'
console.log(judge.isAbsolute(__dirname))
console.log(judge.isAbsolute("src/index"))

console.log(judge.isRelative(__dirname))
console.log(judge.isRelative(process.cwd()))
console.log(judge.isRelative("a/sds"))