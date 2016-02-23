var Root = require('oliveroot');

(function (global) {
    var Olive = {
        define: Root.define,
        layout: {},
        theme: require('./theme/theme.js'),
        components: {
            Component: require('./component/component.js'),
            Button: require('./component/widget/field/button.js'),
            TextInput: require('./component/widget/field/textInput.js'),
            Text: require('./component/widget/field/text/text.js'),
            Link: require('./component/widget/field/link/link.js'),
            Avatar: require('./component/widget/field/avatar/avatar.js'),
            Preview: require('./component/widget/field/preview/preview.js'),
            Player: require('./component/widget/field/player/player.js'),
            Recommend: require('./component/widget/field/recommend/recommend.js'),
            StarVote: require('./component/widget/field/starVote/starVote.js'),
            Container: require('./component/container/container.js'),
            Viewport: require('./component/container/viewport/viewport.js'),
            Panel: require('./component/container/panel/panel.js'),
            Form: require('./component/container/form.js')
        }
    };
    module.exports = global.Olive = Olive;
})(typeof window !== "undefined" ? window : this);