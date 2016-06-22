var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var Renderable = require('./mixin/renderable.js');
var Observable = require('./mixin/observable.js');
var core = require('../core/core.js');

var sid = 0;

module.exports = Root.define({
    mixin: [Renderable, Observable],
    initialize: function () {
        this.id = 'olive_' + (sid++);
        this.doHooks();
        this.children = this.processItems();
        if (this.options.ref) {
            this.registerInstance();
        }
    },
    doHooks: function () {
        //I believe it's order sensitive here. Need time to check.
        var list = [this._addEventHooks, this._applyLayout, this._registerEvents];
        var self = this;
        _.each(list, function (item) {
            _.isFunction(item) && item.apply(self);
        });
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
        core.setComp(this.options.ref, this);
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
        core.unregisterComp(this.options.ref);
    },
    remove: function () {
        $(this.el).remove();
    }
});