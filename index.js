var rest = require('restler');

module.exports = {
  'gif': function(input, cb) {
    // input.parsed is the user message, minus any !triggers
    var query = encodeURIComponent(input.parsed);
    // this is the test key from giphy.
    // TODO: replace with another API, or randomize the results?
    var options = { rejectUnauthorized: false };
    var baseUrl = 'https://ticketap.com/rightgif'
    var url = baseUrl + '?text='+query
    rest.get(url, options).on('complete', function(data) {
      var img;
      if(data.gifs && data.gifs.length > 0) {
        img = chooseRandom(data.gifs).url;
      } else {
        img = data.url;
      }
      cb(null, 'word!  ' + img);
    });
  }
}

function chooseRandom(gifs) {
  return gifs[Math.floor(Math.random() * gifs.length)];
}