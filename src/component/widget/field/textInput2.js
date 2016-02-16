var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../../component.js');
var Observable = require('../../mixin/observable.js');
var React = require('react');

var TextInput = React.createClass({
    render: function () {
        return (
            <input style={this.props.style}/>
        );
    }
});

module.exports = Root.define({
    extend: Component,
    mixin: Observable,
    reactClass: TextInput
});