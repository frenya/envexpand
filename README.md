# envexpand

Expand environment variables in strings, arrays and objects

## Installation

    npm install envexpand --save

## Usage

```javascript
var envexpand = require('envexpand')(process.env);

// var config = require('./config.json');
var config = {
  host: '$HOST',
  port: '$PORT',
  paths: [ '.', '$HOME', '$TMP' ],
  range: {
    from: '$MIN',
    to: '$MAX'
  }
}

// Recursively expand all env variables within the config object
config = envexpand(config);
```

## Non-existent variables

If an environment variable is not found, the string is left intact.
See `test.mocha.js` for examples.
