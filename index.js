var rest = require('restler');

module.exports = {
  'gif': function(input, cb) {
    // input.parsed is the user message, minus any !triggers
    var parsedText = process(input.text)
    var query = encodeURIComponent(parsedText);
    // this is the test key from giphy.
    // TODO: replace with another API, or randomize the results?
    rest.get('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC').on('complete', function(data) {
      cb(null, parsedText '! ' + data.data[0].images.fixed_height.url);
    });
  }
}

function process(input) {
  var startDelimeter = '!gif';
  var endDelimeter = '.';
  var part1 = input.split(startDelimeter);
  if(part1.length > 1) {
    var part2 = part1[1].split(endDelimeter);
    return part2[0];
  } else {
    return part1[0];
  }
}