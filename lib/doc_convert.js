var fs = require('fs');
var pdf = require('html-pdf');
var jade = require('jade');
var _ = require('underscore');

var options = {
    "format": "A4",
    "orientation": "portrait", 

    // Page options 
    "border": {
	"top": "1in",
	"right": "0.5in",
	"bottom": "1in",
	"left": "0.5in"
    },
    
    "type": "pdf",             // allowed file types: png, jpeg, pdf 
    "quality": "75"           // only used for types png & jpeg 
};

// Class for Convert Document
//
// Make pdf document file from given data 
var JDocConvert = function() {
};

// converting PDF file from info
//
// @param {object} [info]     Data of Document
// @param {object} [options]  options
// 
JDocConvert.prototype.convert = function( info, options ) {

    options = options || {};
    var dest = info["filename"] + ".pdf";

    if( options.filename ) {
        dest = options.filename;
    };

    
    var html = this.createHtml( info );
    
    pdf.create(html, options).toFile(dest, function (err, res) {
	if (err) throw err;
    });
}


// create html
//
// @param {object} [info] data of document
// @param {object} [options] print option

JDocConvert.prototype.createHtml = function( info ) {

    var template = 'templates/index.jade';
    var html = jade.renderFile(template, info);
    return html;
};

module.exports = {
    JDocConvert: JDocConvert
};
