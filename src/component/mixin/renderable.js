var _ = require('underscore');
var $ = (OENV === 'node' ? require('jquery')(require('jsdom').jsdom().defaultView) : require('jquery'));
var Root = require('oliveroot');
var core = require('../../core/core.js');

module.exports = Root.define({
    _parseHtml: function () {
        var itemHtmlElements = _.map(this.children, function (item) {
            return item._parseHtml();
        });
        var toolHtmlElements = _.map(this.toolbar, function (tool) {
            return tool._parseHtml();
        });
        //return html el
        return this._parseCurrentHtml({itemHtmlElements: itemHtmlElements, toolHtmlElements: toolHtmlElements});
    },
    _parseCurrentHtml: function (children) {
        this._parseCustomizedStyle();
        //TODO refactor
        var fragment = this._addChildren(_.template(this.tpl)(this), children);
        this.el = fragment;
        this.triggerLifeCycle('afterMount');
        if (!fragment) {
            return;
        }
        this._setStandardStyle(fragment);
        this._setId(fragment);
        this._setClass(fragment);
        //return this._setComment(fragment);
        return fragment;
    },
    _setStandardStyle: function (fragment) {
        var style = fragment.style;
        _.each(this.options.style, function (value, key) {
            style[key] = (_.isNumber(value) ? (value + 'px') : value);
        })
    },
    _setComment: function (fragment) {
        var htmlComment = this.options.htmlComment;
        if (!htmlComment) {
            return fragment.outerHTML;
        }
        return '<!--' + htmlComment + ' start -->' + fragment.outerHTML + '<!--' + htmlComment + ' end -->';
    },
    _setClass: function (fragment) {
        $(fragment).addClass(this.options.cls);
    },
    _setId: function (fragment) {
        $(fragment).attr('id', this.options.id);
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
    //todo this is an old implementation, going to rewrite, and prepare to fallback
    _parseCustomizedStyle: function () {
        var rules = {
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
    _render: function (el) {
        $(this.parentDom).html(el);
    },
    renderTo: function (target) {
        this.triggerLifeCycleCascade('beforeRender');
        if (OENV === 'node') {
            var fs = require('fs');
            var path = require('path');
            var tpl = require('./template.tpl');
            var html = _.template(tpl)({
                body: this._parseHtml().outerHTML
            });
            var pa = process.argv[1];
            fs.writeFile(path.dirname(pa) + '/' + path.basename(pa, '.js') + '.html', html, function (err) {
                console.log(err ? '生成失败!' : '生成成功!')
            });
            return;
        }
        this.parentDom = target || this.target || 'body';
        var isRendered = core.getRenderState();
        if (isRendered !== 'rendered') {
            this._render(this._parseHtml());
        }
        this.triggerLifeCycleCascade('afterRender');
    },
    triggerLifeCycleCascade: function (event) {
        this.trigger(event, {});
        _.each(this.children, function (child) {
            child.triggerLifeCycleCascade(event);
        });
    },
    triggerLifeCycle: function (event) {
        this.trigger(event, {});
    },
    remove: function () {
    },
    show: function () {
    },
    hide: function () {
    }
});