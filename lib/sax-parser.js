var sax = require('sax'),
    parser = sax.createStream(true);

parser.on('opentag', function (tag) {
    parser.emit('data', { name: tag.name, attributes: tag.attributes, nodeType: "StartNode" });
});

parser.on('closetag', function (tag) {
    parser.emit('data', { name: tag, attributes: {}, nodeType: "EndNode" });
});

parser.on('error', function (error) {
    throw error;
});

module.exports = parser;