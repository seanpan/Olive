var _ = require('underscore');
var $ = require('jquery');
var Root = require('oliveroot');
var Component = require('../../../component.js');
var tpl = require('./player.tpl');
require('./player.scss');

module.exports = Root.define({
    extend: Component,
    tpl: tpl,
    initialize: function () {
        this.initToolbar();
        this.callParent();
    },
    initToolbar: function () {
        this.toolbar = _.map(this.options.toolbar, function (tool) {
            var klass = tool.type;
            return new klass(tool);
        });
    },
    afterRender: function () {
        if (window.tb_player_object) {
            tb_player_object.embedPlayer({
                "div": this.id + '_player',
                "height": "414px",
                "tid": "1",
                "uid": "1010230267",
                "vid": "34303971",
                "width": "930px"
            }, {
                "autoplay": false
            }, {
                "allowFullScreen": true,
                "allowScriptAccess": "always",
                "wmode": "transparent"
            });
        }
    }
});