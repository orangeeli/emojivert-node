var map = require("./lib/mapping");

var Emojivert = {

    unified_to_google: function(text) {
        return Emojivert.convert(text, "unified_to_google");
    },

    convert: function(text, char_map) {

        var retStr = text;


        for (var key in map[char_map]) {
            var value = map[char_map][key];

            retStr.replace(key, value);

        }

        return retStr;

    }

};

module.exports = Emojivert;
