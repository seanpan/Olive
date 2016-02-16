var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var MicroEvent = require('microevent');

module.exports = Root.define({
    autoInit: function (klass) {
        MicroEvent.mixin(klass);
    },
    _addEventHooks: function () {
        var self = this;
        this.bind('afterRender', function () {
            _.isFunction(self.afterRender) && self.afterRender();
        });
    },
    _registerEvents: function () {
        var self = this;
        //TODO concern...
        var $doc = $(document);
        _.each(this.options.listeners, function (callback, key) {
            $doc.on(key, '#' + self.id, callback);
        });
    }
});