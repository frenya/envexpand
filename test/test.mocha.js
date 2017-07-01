var assert = require('chai').assert;

var testenv = {
  'FOO': 'bar'
};
var envexpand = require('../index')(testenv);

describe('envexpand', function() {

  var testdata = {
    str: 'From $FOO to $BAR',
    arr: ['from', '$FOO', { to: '$BAR' } ],
    obj: {
      from: '$FOO',
      to: [ '$BAR ']
    },
    num: 1,
    boo: true
  }

  it('should correctly expand environment variables', function() {
    assert.deepEqual(envexpand(testdata), {
      str: 'From bar to $BAR',
      arr: ['from', 'bar', { to: '$BAR' } ],
      obj: {
        from: 'bar',
        to: [ '$BAR ']
      },
      num: 1,
      boo: true
    });
  })

  it('should correctly handle invalid input', function() {
    assert.equal(envexpand(''), '');
    assert.equal(envexpand(null), null);
    assert.equal(envexpand(123), 123);
    assert.equal(envexpand(true), true);
  });


})
