var Olive = require('../src/app.js');
var comps = Olive.components;
var Layout = Olive.Layout;

//var ThemeEnum = Olive.theme.ThemeEnum;
var Container = comps.Container;
var Viewport = comps.Viewport;
var Tab = comps.Tab;
var ReactBtn = comps.ReactBtn;
var AtomCombo = comps.AtomCombo;
var DatePicker = comps.AntdDatePicker;

var viewport = new Viewport({
    layout: Layout.Binary,
    items: [
        {
            type: Container,
            items: [
                {
                    type: ReactBtn
                }
            ],
            style: {
                width: 200,
                textAlign: 'center'
            }
        },
        {
            type: Container,
            style: {
                backgroundColor: '#ccc'
            }
        }
    ],
    style: {
        height: '100%'
    }
});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');