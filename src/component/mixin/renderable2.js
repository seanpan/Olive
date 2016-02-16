var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var ReactDOM = require('react-dom');
var React = require('react');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

module.exports = Root.define({
    _parse: function (states, actions) {
        var ReactClass = this.reactClass;
        return (
            <ReactClass options={this.options} actions={actions} state={states}>
                {this.itemInstances.map(function (itemIns) {
                    return itemIns._parse(states, actions);
                })}
            </ReactClass>
        );
    },
    renderTo: function (target) {
        var self = this;
        var store = createStore(this.options.reducers);
        var AppRaw = React.createClass({
            render: function () {
                return self._parse(this.props.state, this.props.actions);
            }
        });

        function mapStateToProps(state) {
            return {
                state: state
            }
        }

        function mapDispatchToProps(dispatch) {
            return {
                actions: bindActionCreators(self.options.actions, dispatch)
            }
        }

        var App = connect(mapStateToProps, mapDispatchToProps)(AppRaw);

        this.reactElement = ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            target || document.body
        );
    },
    remove: function () {
    },
    show: function () {
    },
    hide: function () {
    }
});