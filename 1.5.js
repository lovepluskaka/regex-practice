// 匹配16进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
var s = "#abc #djais #1234 #999999"
console.log(s.match(regex))