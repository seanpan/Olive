var _ = require('underscore');
var Root = require('oliveroot');
var Panel = require('./panel/panel.js');

module.exports = Root.define({
    extend: Panel,
    tpl: '<div class="form" style="<%= obj.parsedStyle %>"><div class="header"><div class="title"><%= obj.title %></div><div class="tool"></div></div><div class="body"><form><%= obj.content %></form></div></div>'
});