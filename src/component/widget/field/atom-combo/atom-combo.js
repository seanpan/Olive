var Root = require('oliveroot');
var Component = require('../../../component.js');
var AtomCombo = require('@alife/alpha-combobox/combobox');
//require('@alife/alpha-combobox/combobox.css');

module.exports = Root.define({
    extend: Component,
    //todo clean
    tpl: '<div id="atom-combo"></div>',
    afterRender: function () {
        var combo = new AtomCombo({
            parentNode: '#atom-combo',
            disabled: true,
            style: "normal",
            dataSource: this.options.dataSource
        });
        combo.render();
        combo.set("disabled", false);
    }
});