var rest = require('restler');

module.exports = {
  'gif': function(input, cb) {
    // input.parsed is the user message, minus any !triggers
    var query = encodeURIComponent(input.parsed);
    // this is the test key from giphy.
    // TODO: replace with another API, or randomize the results?
    rest.get('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC').on('complete', function(data) {
      cb(null, 'word!  ' + data.data[0].images.fixed_height.url);
    });
  }
}
