var Root = require('oliveroot');
var Component = require('../../../component.js');
//var Button = require('./button.jsx').default;


//function onChange(value, dateString) {
//    console.log(value, dateString);
//}

//ReactDOM.render(<DatePicker onChange={onChange} />, mountNode);

module.exports = Root.define({
    extend: Component,
    //todo clean
    tpl: '<div class="antd-datepicker"></div>',
    afterRender: function () {
        var ReactDOM = require('react-dom');
        var React = require('react');
        var Button = require('antd').DatePicker;
        ReactDOM.render(React.createElement(Button, {
            type: 'primary',
            icon: 'search'
        }, '搜索'), this.el);
    }
});