var actionsEnum = require('./actionsEnum');

module.exports = {
    highLight: function () {
        return {
            type: actionsEnum.HIGH_LIGHT
        }
    }
};