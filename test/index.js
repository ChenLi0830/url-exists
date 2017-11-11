var assert = require('assert');

var urlExists = require('..');

urlExists('https://www.google.com')
  .then(exists => {
    assert(exists === true);
    return urlExists('https://google.com')
  })
  .then(exists => {
    assert(exists === true);
    return urlExists('http://www.google.com')
  })
  .then(exists => {
    assert(exists === true);
    return urlExists('http://www.google.com')
  })
  .then(exists => {
    assert(exists === true);
    return urlExists('https://www.asdflkasdfljalsfdjasfdljklsjafasdfljjkasfdsafdljfdsaljakljsdljksafasfdlk.lasjkd')
  })
  .then(exists => {
    assert(exists === false);
  })
  .then(() => {
    urlExists('https://www.google.com', function(err, exists) {
      assert(exists === true);
    
      urlExists('https://google.com', function(err, exists) {
        assert(exists === true);
    
        urlExists('http://www.google.com', function(err, exists) {
          assert(exists === true);
    
          urlExists('https://www.asdflkasdfljalsfdjasfdljklsjafasdfljjkasfdsafdljfdsaljakljsdljksafasfdlk.lasjkd', function(err, exists) {
            assert(exists === false);
    
            console.log('All tests pass!');
            process.exit(0);
          });
        });
      });
    });
  });
