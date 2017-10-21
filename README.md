# sax-xml2json

A sax-style parser for converting XML and HTML to JSON.

Designed with [node](http://nodejs.org/) in mind, but should work fine in
the browser or other CommonJS implementations.

## What This Is

* A very simple tool to convert XML file to JSON object.

## Usage
```javascript
var convert = require("sax-xml2json");
convert.toJson("./standard.xml", function (error, result) {
    console.log(result);
});
```


## Reporting Problems

It's best to write a failing test if you find an issue.  I will always
accept pull requests with failing tests if they demonstrate intended
behavior, but it is very hard to figure out what issue you're describing
without a test.  Writing a test is also the best way for you yourself
to figure out if you really understand the issue you think you have with
sax-xml2json.
