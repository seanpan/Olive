var comps = {};
var core = {
    setComp: function (refName, comp) {
        comps[refName] = comp;
    },
    getComp: function (refName) {
        return comps[refName];
    },
    unregisterComp: function (refName) {
        comps[refName] = null;
        delete comps[refName];
    },
    getRenderState: function () {
        return !!document.body.getAttribute('state');
    }
};
module.exports = core;