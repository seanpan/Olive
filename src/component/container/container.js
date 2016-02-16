var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../component.js');
var Observable = require('../mixin/observable.js');
var tpl = require('./container.tpl');

module.exports = Root.define({
    extend: Component,
    tpl: tpl
});