var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');

var ALI = require('./themes/ali.js');
var ALI1688 = require('./themes/ali1688.js');

var theme = {
    ThemeEnum: {
        ALI: ALI,
        ALI1688: ALI1688
    }
};

module.exports = theme;