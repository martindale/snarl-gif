var rest = require('restler');

module.exports = {
  'gif': function (input, cb) {
    var self = this;
    var input = input.parsed.toLowerCase();
    var query = encodeURIComponent(input);
    var options = { rejectUnauthorized: false };
    var baseUrl = 'https://ticketap.com/rightgif';
    var url = baseUrl + '?text=' + query;
    rest.get(url, options).on('complete', function (data) {
      var img = self.chooseRandom(data.gifs).url;
      cb(null, 'You want ' + input + '?  I know ' + input + ': ' + img);
    });
  },
  'chooseRandom': function (gifs) {
    return gifs[Math.floor(Math.random() * gifs.length)];
  }
};
