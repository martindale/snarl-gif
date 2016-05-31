var rest = require('restler');

module.exports = {
  'gif': function(input, cb) {
    var self = this;
    var query = encodeURIComponent(input.parsed);
    var options = { rejectUnauthorized: false };
    var baseUrl = 'https://ticketap.com/rightgif';
    var url = baseUrl + '?text='+query;
    rest.get(url, options).on('complete', function(data) {
      var img;
      if(data.gifs && data.gifs.length > 0) {
        img = self.chooseRandom(data.gifs).url;
      } else {
        img = data.url;
      }
      cb(null, 'word!  ' + img);
    });
  },
  'chooseRandom': function(gifs) {
    return gifs[Math.floor(Math.random() * gifs.length)];
  }
};
