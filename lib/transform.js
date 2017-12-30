var _ = require("lodash");
var through2 = require('through2');
module.exports = through2.ctor({ objectMode: true }, function (data, encoding, callback) {
    try {
        this.node_stack = this.node_stack || [];
        this.resultJson = this.resultJson || [];
        if (data.nodeType == "StartNode") {
            var temp = { Name: data.name, attributes: data.attributes, child: [] };
            this.node_stack.push(data.name);
            this.resultJson.push(temp);
        } else if (data.nodeType == "EndNode") {
            this.node_stack.pop(data.name);
            if (this.node_stack.length > 0) {
                var lastElement = this.node_stack[this.node_stack.length - 1];
                var lastElementIndex = _.findIndex(this.resultJson, (item) => { return item.Name == lastElement; });
                var currentNodeIndex = _.findIndex(this.resultJson, (item) => { return item.Name == data.name; });
                this.resultJson[lastElementIndex].child.push(this.resultJson[currentNodeIndex]);
                this.resultJson.splice(currentNodeIndex, 1);
            }
        }
        this.push(JSON.stringify(data));
        callback();
    } catch (error) {
        callback(error);
    }
});