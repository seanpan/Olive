var Root = require('oliveroot');
var Component = require('../../../component.js');
var Button = require('./button.jsx').default;
var ReactDOM = require('react-dom');
var React = require('react');

module.exports = Root.define({
    extend: Component,
    //todo clean
    tpl: '<div class="react-btn"></div>',
    afterMount: function () {
        ReactDOM.render(React.createElement(Button), this.el);
    }
});