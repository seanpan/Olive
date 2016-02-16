var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');

module.exports = Root.define({
    _parseDom: function () {
        var $itemHtmls = _.map(this.children, function (item) {
            return item._parseDom();
        });
        var $toolHtmls = _.map(this.toolbar, function (tool) {
            return tool._parseDom();
        });
        var $html = this._parseCurrentDom({content: $itemHtmls.join(''), toolbar: $toolHtmls.join('')});
        return $html;
    },
    _parseCurrentDom: function (items) {
        //TODO refactor
        this._parseStyle();
        this.content = items.content;
        this.toolbarHtml = items.toolbar;
        return _.template(this.tpl)(this);
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
        this._render(this._parseDom());
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