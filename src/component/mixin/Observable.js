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
        if (OENV !== 'node') {
            this.bind('afterRender', function () {
                _.isFunction(self.afterRender) && self.afterRender();
            });
        }
        //else {
        //    if (_.isFunction(self.afterRender)) {
        //        console.log(self.afterRender.toString());
        //    }
        //}
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