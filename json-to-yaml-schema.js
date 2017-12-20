'use strict';

const schemaGenerator = require('json-schema-generator');
const YAML = require('json2yaml');

let jsonStr = process.argv[2];
let json = JSON.parse( jsonStr);
let schemaObj = schemaGenerator(json);
delete schemaObj.$schema;
delete schemaObj.description;
schemaObj.example = json;
console.log(YAML.stringify(schemaObj));
// console.log(JSON.stringify(schemaObj));
