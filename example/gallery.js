//var ThemeEnum = Olive.theme.ThemeEnum;
var Container = Olive.components.Container;
var Viewport = Olive.components.Viewport;
var Tab = Olive.components.Tab;
var ReactBtn = Olive.components.ReactBtn;

//Ternary Binary HBox VBox

var viewport = new Viewport({
    //theme: ThemeEnum.ALI1688,
    items: [
        {
            type: Container,
            htmlComment: 'a container',
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
                }
            ]
        }
    ]
});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');