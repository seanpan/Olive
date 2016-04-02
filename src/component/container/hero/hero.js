var _ = require('underscore');
var Root = require('oliveroot');
var Panel = require('../panel/panel.js');
var Observable = require('../../mixin/observable.js');
var tpl = require('./hero.tpl');
require('./hero.scss');

module.exports = Root.define({
    extend: Panel,
    tpl: tpl
});