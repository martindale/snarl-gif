var assert = require('chai').assert;

var plugin = require('../');

describe('snarl-gif', function() {
  describe('#interpret()', function () {
    it('should exist as a function', function () {
      assert.equal(typeof plugin.gif, 'function');
    });
    it('should parse an input', function (done) {
      var input = {
        parsed: "hello world"
      };

      plugin.gif(input, function(err, msg) {
        assert.isNull(err);
        assert.isOk(msg)
        done(err);
      });
    });
  });
  describe('#chooseRandom()', function () {
    it('should exist as a function', function () {
      assert.equal(typeof plugin.chooseRandom, 'function');
    });
    it('should return an item in the array', function () {
      var arr = [1, 2, 3, 4];
      var item = plugin.chooseRandom(arr);
      assert.isTrue(arr.indexOf(item) > -1)
    });
  });
});
