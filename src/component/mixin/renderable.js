var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');

module.exports = Root.define({
    _parseHtml: function () {
        var itemHtmlElements = _.map(this.children, function (item) {
            return item._parseHtml();
        });
        var toolHtmlElements = _.map(this.toolbar, function (tool) {
            return tool._parseHtml();
        });
        return this._parseCurrentHtml({itemHtmlElements: itemHtmlElements, toolHtmlElements: toolHtmlElements});
    },
    _parseCurrentHtml: function (children) {
        //TODO refactor
        this._parseStyle();
        return this.el = this._addChildren(_.template(this.tpl)(this), children);
    },
    _addChildren: function (current, children) {
        //this.toolbarHtml = children.toolbar;
        var $current = $(current);
        $current.find('.toolbar').append(children.toolHtmlElements);
        var $body = $current.find('.body');
        $body.append(children.itemHtmlElements);
        $body.append($body.children('.clear'));
        return $current[0];
    },
    _parseStyle: function () {
        //getRules(this);
        var rules = {
            lineHeight: function (value) {
                return 'line-height: ' + value + 'px;';
            },
            marginRight: function (value) {
                return 'margin-right: ' + value + 'px;'
            },
            marginBottom: function (value) {
                return 'margin-bottom: ' + value + 'px;'
            },
            paddingLeft: function (value) {
                return 'padding-left: ' + value + 'px;'
            },
            horizontalAlign: function (value) {
                switch (value) {
                    case 'center':
                        return 'margin: 0 auto;';
                    case 'right':
                        return 'float: right;';
                    case 'left':
                        return 'float: left;';
                    default:
                        return '';
                }
            },
            backgroundColor: function (value) {
                return 'background-color: ' + value + ';';
            },
            borderRight: function (value) {
                return 'border-right: ' + value + ';';
            },
            background: function (value) {
                return 'background: ' + value + ';';
            }
        };
        var parsedStyle = '';
        _.each(this.options.style, function (value, key) {
            var rule = rules[key];
            if (rule) {
                parsedStyle += rule(value);
                return;
            }
            parsedStyle += (key + ': ' + (_.isNumber(value) ? (value + 'px') : value) + ';');
        });
        return this.parsedStyle = parsedStyle;
    },
    _render: function (html) {
        $(this.parentDom).append(html);
        this.triggerAfterRender();
    },
    renderTo: function (target) {
        this.parentDom = target || this.target || 'body';
        this._render(this._parseHtml());
    },
    triggerAfterRender: function () {
        this.trigger('afterRender', {});
        _.each(this.children, function (child) {
            child.triggerAfterRender();
        });
    },
    remove: function () {
    },
    show: function () {
    },
    hide: function () {
    }
});