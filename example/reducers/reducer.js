var combineReducers = require('redux').combineReducers;
var panel = require('./panel');

var rootReducer = combineReducers({
    panel: panel
});

module.exports = rootReducer;