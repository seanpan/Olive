var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../component.js');
var Observable = require('../mixin/observable.js');
var React = require('react');

var Container = React.createClass({
        getInitialState: function () {
            return {hasHeader: true};
        },
        render: function () {
            var hasHeader = this.state.hasHeader;
            var {listeners, layout, ...other} = this.props.options;
            return (
                <div className={layout}>
                    {hasHeader && <Header />}
                    {this.props.children}
                </div>
            );
        }
    })
    ;

var Header = React.createClass({
    render: function () {
        return (
            <div>asdfsaddf</div>
        );
    }
});

module.exports = Root.define({
    extend: Component,
    mixin: Observable,
    reactClass: Container
});