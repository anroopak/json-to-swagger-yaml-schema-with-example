# json-to-swagger-yaml-schema-with-example
Converts a JSON object to corresponding Swagger YAML schema

## Setup
```
$ npm install --save
```

## Usage
```
$ node json-to-yaml-schema.js '<JSON object>'
```

## Example
```
$ node json-to-yaml-schema.js '{"json": "abc"}'

->
type: "object"
  properties:
    json:
      type: "string"
      minLength: 1
  required:
    - "json"
  example:
    json: "abc"

```
