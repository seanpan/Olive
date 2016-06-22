var Root = require('oliveroot');
var Component = require('../component.js');
var tpl = require('./container.tpl');
var Layoutable = require('../mixin/layoutable.js');

module.exports = Root.define({
    extend: Component,
    mixin: Layoutable,
    tpl: tpl
});