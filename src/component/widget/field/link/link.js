var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../../../component.js');
var Observable = require('../../../mixin/observable.js');
var tpl = require('./link.tpl');
require('./link.scss');

module.exports = Root.define({
    extend: Component,
    mixin: Observable,
    tpl: tpl
});