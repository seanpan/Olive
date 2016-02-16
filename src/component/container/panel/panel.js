var _ = require('underscore');
var Root = require('oliveroot');
var Container = require('../container.js');
var Observable = require('../../mixin/observable.js');
var tpl = require('./panel.tpl');
require('./panel.scss');

module.exports = Root.define({
    extend: Container,
    //tpl: '<div class="panel body" style="<%= obj.parsedStyle %>"><%= obj.content %></div>',
    tpl: tpl
});