//var Root = require('oliveroot');
//
//(function (global) {
//    var comps = {};
//    var Olive = {
//        define: Root.define,
//        setComp: function (refName, comp) {
//            comps[refName] = comp;
//        },
//        getComp: function (refName) {
//            return comps[refName];
//        },
//        unregisterComp: function (refName) {
//            comps[refName] = null;
//            delete comps[refName];
//        },
//        getRenderState: function () {
//            return !!document.body.getAttribute('state');
//        },
//        components: {
//            Component: require('./component/component.js'),
//            Button: require('./component/widget/field/button/button.js'),
//            CourseList: require('./component/widget/field/courseList/courseList.js'),
//            TextInput: require('./component/widget/field/textInput.js'),
//            Text: require('./component/widget/field/text/text.js'),
//            Link: require('./component/widget/field/link/link.js'),
//            Avatar: require('./component/widget/field/avatar/avatar.js'),
//            Preview: require('./component/widget/field/preview/preview.js'),
//            Player: require('./component/widget/field/player/player.js'),
//            Recommend: require('./component/widget/field/recommend/recommend.js'),
//            StarVote: require('./component/widget/field/starVote/starVote.js'),
//            VideoTool: require('./component/widget/field/videoTool/videoTool.js'),
//            Container: require('./component/container/container.js'),
//            Viewport: require('./component/container/viewport/viewport.js'),
//            Panel: require('./component/container/panel/panel.js'),
//            Hero: require('./component/container/hero/hero.js'),
//            Form: require('./component/container/form.js'),
//            Table: require('./component/widget/smart/table/table.js'),
//            Tab: require('./component/widget/field/tab//tab.js'),
//            ReactBtn: require('./component/widget/field/react-btn/react-btn.js')
//        }
//    };
//    module.exports = global.Olive = Olive;
//})(typeof window !== "undefined" ? window : this);

var Root = require('oliveroot');
var _ = require('underscore');
var core = require('./core/core.js');
var Layout = require('./layout/layoutInterface.js');

(function (global) {

    var Olive = {
        define: Root.define,
        Layout: Layout,
        components: {
            Component: require('./component/component.js'),
            Button: require('./component/widget/field/button/button.js'),
            CourseList: require('./component/widget/field/courseList/courseList.js'),
            TextInput: require('./component/widget/field/textInput.js'),
            Text: require('./component/widget/field/text/text.js'),
            Link: require('./component/widget/field/link/link.js'),
            Avatar: require('./component/widget/field/avatar/avatar.js'),
            Preview: require('./component/widget/field/preview/preview.js'),
            Player: require('./component/widget/field/player/player.js'),
            Recommend: require('./component/widget/field/recommend/recommend.js'),
            StarVote: require('./component/widget/field/starVote/starVote.js'),
            VideoTool: require('./component/widget/field/videoTool/videoTool.js'),
            Container: require('./component/container/container.js'),
            Viewport: require('./component/container/viewport/viewport.js'),
            Panel: require('./component/container/panel/panel.js'),
            Hero: require('./component/container/hero/hero.js'),
            Form: require('./component/container/form.js'),
            Table: require('./component/widget/smart/table/table.js'),
            Tab: require('./component/widget/field/tab//tab.js'),
            ReactBtn: require('./component/widget/field/react-btn/react-btn.js'),
            //AtomCombo: require('./component/widget/field/atom-combo/atom-combo.js'),
            AntdDatePicker: require('./component/widget/field/antd-datepicker/antd-datepicker.js')
        }
    };

    Olive = _.extend(Olive, core);
    module.exports = global.Olive = Olive;
})(typeof window !== "undefined" ? window : this);