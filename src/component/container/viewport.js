var _ = require('underscore');
var Root = require('oliveroot');
var Container = require('./container.js');

module.exports = Root.define({
    extend: Container,
    tpl: '<div class="viewport body <%= obj.theme %>"><%= obj.content %></div>'
});