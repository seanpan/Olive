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
    destroy: function () {
    }
});