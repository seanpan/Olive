var _ = require('underscore');
var Root = require('oliveroot');
var Container = require('./container.js');
var Observable = require('../mixin/observable.js');
var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <div className="title">
                    <div className="orangeLine"></div>
                    <div className="titleContent">{this.props.title}</div>
                    <div className="seperator"></div>
                </div>
            </div>
        );
    }
});

var Panel = React.createClass({
    handleClick: function (e) {
        var listeners = this.props.options.listeners;
        listeners.click.apply(this);
    },
    render: function () {
        var {style,title, listeners, ...other} = this.props.options;
        return (
            <div className={'displayBlock '+(this.props.state.panel.highLight?'hightLight':'')} style={style}
                 onClick={this.handleClick}>
                <Header title={title}/>
            </div>
        );
    }
});

module.exports = Root.define({
    extend: Container,
    mixin: Observable,
    reactClass: Panel
});