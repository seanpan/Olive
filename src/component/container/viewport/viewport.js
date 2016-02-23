var _ = require('underscore');
var Root = require('oliveroot');
var Container = require('../container.js');
var tpl = require('./viewport.tpl');

module.exports = Root.define({
    extend: Container,
    tpl: tpl
});