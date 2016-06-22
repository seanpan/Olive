var _ = require('underscore');
var Root = require('oliveroot');

module.exports = Root.define({
    _applyLayout: function () {
        if (_.isFunction(this.options.layout)) {
            new this.options.layout().applyLayout.apply(this);
        }
    }
});