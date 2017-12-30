var fs = require('fs'),
    parser = require("./sax-parser"),
    TransformXMLToJSon = require("./transform"),
    transformXMLToJSon = TransformXMLToJSon();

module.exports = function (inputFile, callback) {
    var tempFile = "./"+ Math.random() + ".xml";
    fs.createReadStream(inputFile)
        .pipe(parser)
        .pipe(transformXMLToJSon)
        .pipe(fs.createWriteStream(`${tempFile}`))
        .on('close', function () {
            fs.unlinkSync(tempFile);
            callback(null, transformXMLToJSon.resultJson);
        }).on('error', function (error) {
            callback(error, null);
        });
};