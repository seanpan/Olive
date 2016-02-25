/**
 * Created by Sean on 16/1/20.
 */
//shimming of bind/filter coz they are broken in ie9- while webpack try to pack;
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {

        var fn = this,
            args = [].slice.call(arguments),
            object = args.shift();

        return function () {

            return fn.apply(object, args.concat([].slice.call(arguments)));

        };

    };

}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun, thisp) {
        var len = this.length;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        for (var i = 0; i < len; i++) {
            if (i in this) {
                var val = this[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, this))
                    res.push(val);
            }
        }
        return res;
    };
}

require('./src/app.js');
require('normalize.css');
require('./src/style/lib/apollo-rwd.min.css');
require('./src/style/lib/apollo-rwd-seo.min.css');
require('./src/style/lib/apollo-rwd-xxs.min.css');
require('./src/style/lib/apollo-rwd-ie8.min.css');
require('./src/style/lib/apollo-rwd-ie8-seo.min.css');
require('./src/style/1688/sass/src/theme.scss');