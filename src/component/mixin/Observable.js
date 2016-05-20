var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var MicroEvent = require('microevent');

module.exports = Root.define({
    autoInit: function (klass) {
        MicroEvent.mixin(klass);
    },
    _addEventHooks: function () {
        if (OENV !== 'node') {
            this._addEventHook('afterMount');
            this._addEventHook('beforeRender');
            this._addEventHook('afterRender');
        }
    },
    _addEventHook: function (event) {
        var self = this;
        this.bind(event, function () {
            var callback = self[event];
            _.isFunction(callback) && callback.apply(this);
        });
    },
    _registerEvents: function () {
        var self = this;
        if (OENV !== 'node') {
            var $doc = $(document);
            _.each(this.options.listeners, function (callback, key) {
                $doc.on(key, '#' + self.id, callback);
            });
        }
    }
});