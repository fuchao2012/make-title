#!/usr/bin/env node

var fs = require("fs"),
    path = process.cwd();

var run = function(obj) {
    if (obj[0] === '-v') {
        console.log('version is 1.0.0');
    } else if (obj[0] === '-h') {
        console.log('Useage:');
        console.log('  -v --version [show version]');
        console.log('  String       [make this string to title]');
    } else {
        console.log(obj.toString().trim().replace(', ', ' ').replace(',', ' ').split(' ').join('-') + '.md')
    }
};
//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2));