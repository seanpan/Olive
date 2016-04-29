var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../../../component.js');
var Observable = require('../../../mixin/observable.js');
var tpl = require('./table.tpl');
require('./table.scss');

module.exports = Root.define({
    extend: Component,
    mixin: Observable,
    tpl: tpl,
    initialize: function () {
        this.initTool();
        this.callParent();
    },
    initTool: function () {
        this.tool = _.map(this.options.tool, function (tool) {
            var klass = tool.type;
            return new klass(tool);
        });
    }
});