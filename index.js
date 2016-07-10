var map = require("./lib/mapping");
var utf8 = require("dot-utf8");

var strutil = require("strutil");


var Emojivert = {

    unified_to_google: function(text) {
        return Emojivert.convert(text, "unified_to_google");
    },

    convert: function(text, char_map) {

      var retStr = text;

      console.log(retStr);

      retStr = utf8.utils.hexEncode(utf8.encode(retStr));

      console.log(retStr)

        for (var key in map[char_map]) {

            var value = map[char_map][key];

            // console.log(key == retStr);


            retStr = retStr.replace(key, value);

        }

        retStr = strutil.unescapeFromEscapedBytes(retStr, 16, "UTF-8")

        return retStr;

    }

};

module.exports = Emojivert;
