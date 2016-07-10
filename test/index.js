var should = require('chai').should(),
    emojivert = require('../index');

describe('#escape', function() {
  it('converts & into &amp;', function() {

    var converted = emojivert.unified_to_google('nce a week. 👍');

    console.log(converted)
  });


});
