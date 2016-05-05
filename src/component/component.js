var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var Renderable = require('./mixin/renderable.js');
var Observable = require('./mixin/observable.js');

var sid = 0;

module.exports = Root.define({
    mixin: [Renderable, Observable],
    initialize: function () {
        this.id = 'olive_' + (sid++);
        if (_.isFunction(this._addEventHooks)) {
            this._addEventHooks();
        }
        this.children = this.processItems();
        if (_.isFunction(this._registerEvents)) {
            this._registerEvents();
        }
        if (this.options.ref) {
            this.registerInstance();
        }
    },
    processItems: function () {
        var self = this;
        return _.map(this.options.items, function (item) {
            return self.parseItem(item);
        });
    },
    parseItem: function (item) {
        return new item.type(item);
    },
    registerInstance: function () {
        Olive.setComp(this.options.ref, this);
        //console.log('registering instance...', Olive.getComp(this.options.ref))
    },
    destroy: function () {
        this._unregisterComp();
        this.remove();
    },
    hide: function () {
        $(this.el).hide();
    },
    show: function () {
        $(this.el).show();
    },
    _unregisterComp: function () {
        Olive.unregisterComp(this.options.ref);
    },
    remove: function () {
        $(this.el).remove();
    }
});