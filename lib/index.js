// Requires
var path = require('path');
var fs = require('fs');
var glob = require('glob')
var rimraf = require('rimraf')

// Variables
var baseFolder;
var baseFiles = [];
var indexName;

// Remove previous index.html
rimraf.sync('index.html');

// Fetch working folder name
baseFolder = path.basename(process.cwd());

// Fetch all the HTML files in the current working directory and add them to an array
glob.sync('./*.html')
    .forEach(function(file) {
        baseFiles.push(path.basename(file));
    });
// Sort the files in numerical order if they contain numbers
if (baseFiles.every(numCheck)){
    baseFiles.sort(customSort);
}

// Create the File
indexName = 'index.html';
fs.writeFileSync(indexName, buildHTML(), function (err) {
    if (err) throw err;
    console.log('index.html generated!')
})

// HTML Creation function
function buildHTML() {
    var header = '---\n'+'layout: index-layout\n'+'subject: '+baseFolder+'\n'+'---';
    var lead = '<p class="lead">'+baseFolder+'</p>';
    var linkHTML = '';
    function menu(files) {
        var fileNames = files;
        for (var i = 0; i < fileNames.length; i++) {
            linkHTML += '<item href="'+fileNames[i]+'" target="_blank">'+fileNames[i].replace(/\.[^/.]+$/, '')+'</item>'
        }
        return linkHTML;
    }

    // Concat everything
    return header
        + '<spacer size="16"></spacer>\n'+'<container>\n'+'<spacer size="24"></spacer>\n'+'<row>\n'+'<columns small="12">\n' + lead + '<spacer size="16"></spacer>\n'+'</columns>\n'+'</row>\n'+'<row>\n'+'<columns small="12">\n'+'<menu class="vertical">' + menu(baseFiles) + '</menu>'+'</columns>\n'+'</row>\n'+'</container>'
}

// Custom Sort Function
function customSort(a, b) {
    return (Number(a.match(/(\d+)/g)[0])) - Number((b.match(/(\d+)/g)[0]));
}

// Number Check Function
function numCheck(currentValue) {
    return /\d/.test(currentValue);
}