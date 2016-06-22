var comps = require('../src/app.js').components;

var Container = comps.Container;
var Viewport = comps.Viewport;
var Tab = comps.Tab;
var ReactBtn = comps.ReactBtn;
//var AtomCombo = comps.AtomCombo;
var DatePicker = comps.AntdDatePicker;
require('antd/dist/antd.css');

var viewport = new Viewport({
    items: [
        {
            type: Container,
            items: [
                {
                    type: Tab,
                    theme: 'plain',
                    htmlComment: 'hot tab panel',
                    data: [
                        {
                            name: '今日焦点',
                            active: true
                        },
                        {
                            name: '好文推荐'
                        },
                        {
                            name: '视频推荐'
                        }
                    ]
                }
            ]
        },
        {
            type: Container,
            items: [
                {
                    type: ReactBtn
                },
                {
                    type: DatePicker
                }
            ]
        }
    ]
});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');