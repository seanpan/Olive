var actionsEnum = require('../actions/actionsEnum');

var initState = {
    highLight: false
};

module.exports = function (state, action) {
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case actionsEnum.HIGH_LIGHT:
            return {
                highLight: true
            };
        default:
            return state;
    }
};