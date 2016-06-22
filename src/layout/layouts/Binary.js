var Root = require('oliveroot');
var LayoutBase = require('./LayoutBase.js');

module.exports = Root.define({
    extend: LayoutBase,
    applyLayout: function () {
        var style = this.options.style = this.options.style || {};
        style.bodyDisplay = 'flex';
        var items = this.options.items;
        var nextStyle = items[1].style = items[1].style || {};
        nextStyle.flex = '1';
    }
});