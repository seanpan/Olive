var _ = require('underscore');
//var $ = require('expose?jquery');
var $ = require("expose?jQuery!jquery");
var Root = require('oliveroot');
var Component = require('../../../component.js');
var tpl = require('./recommend.tpl');
require('./recommend.scss');
require('./nanoScroller/bin/css/nanoscroller.css');
require('./nanoScroller/bin/javascripts/jquery.nanoscroller.js');

module.exports = Root.define({
    extend: Component,
    tpl: tpl,
    initialize: function () {
        this.callParent();
    },
    afterRender: function () {
        this.initInteraction();
        this.initScroller();
    },
    initInteraction: function () {
        var $el = $(this.el);
        $el.on('click', '.recommend_tab:not(.active)', function () {
            var tabs = $('.recommend_tab');
            tabs.removeClass('active');
            var current = $(this);
            current.addClass('active');
            var index = tabs.index(current);
            var contentBlocks = $el.find('.recommend_content');
            contentBlocks.hide();
            contentBlocks.eq(index).show();
            //refresh nano scroller
            contentBlocks.nanoScroller();
        });
        $el.on('click', '.series .recommend_content_item_main', function () {
            var $item = $(this).parent();
            $item.toggleClass('active');
            $item.find('.recommend_content_item_detail').slideToggle(80);
        });
    },
    initScroller: function () {
        var $el = $(this.el)
        $el.find('.nano').each(function (index, item) {
            $(item).nanoScroller();
        });
    }
});