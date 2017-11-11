var request = require('request');
var requestPromise = require('request-promise');

function urlExists(url, cb) {
  if (cb) {
    request({ url: url, method: 'HEAD' }, function(err, res) {
      if (err) return cb(null, false);
      cb(null, /4\d\d/.test(res.statusCode) === false);
    });
  }
  else {
    return requestPromise({ url: url, method: 'HEAD' })
    .then(function (res) {
      return /4\d\d/.test(res.statusCode) === false;
    })
    .catch(function (err) {
      return false;
    });
  };
};

module.exports = urlExists;
