var Container = Olive.components.Container;
var Viewport = Olive.components.Viewport;
var Text = Olive.components.Text;
var Link = Olive.components.Link;
var Avatar = Olive.components.Avatar;
var Preview = Olive.components.Preview;
var Player = Olive.components.Player;
var Recommend = Olive.components.Recommend;
var StarVote = Olive.components.StarVote;
var Panel = Olive.components.Panel;
var Table = Olive.components.Table;
var Button = Olive.components.Button;

var viewport = new Viewport({
    responsive: true,
    items: [
        {
            type: Container,
            cls: 'container',
            style: {
                padding: 5
            },
            items: [
                {
                    type: Text,
                    data: '温馨提示:',
                    style: {
                        color: '#ff6600',
                        marginBottom: 5
                    }
                },
                {
                    type: Text,
                    data: '以下列表中的所有考试均可报名参考，点击“去考试”按钮可开始考试。测试后的分数将在考试记录看到。',
                    style: {
                        marginBottom: 10
                    }
                },
                {
                    type: Table,
                    data: [
                        [
                            '考试名称',
                            '考试时间',
                            '考试时长',
                            '操作'
                        ],
                        [
                            '温州鞋操盘商入驻考试',
                            '2016/02/16 19:39 - 2019/02/26 19:39',
                            '60分钟'
                        ]
                    ],
                    tool: [
                        {
                            type: Button,
                            text: '去考试'
                        }
                    ]
                }
            ]
        }
    ]

});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');