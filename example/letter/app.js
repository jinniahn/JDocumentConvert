var convert = require('../..');
var JDocConvert = convert.JDocConvert;
var data = require('./data.json');

var doc = new JDocConvert();

doc.convert(data, {filename: 'test.pdf'});





