var comps = require('../src/app.js').components;

var Container = comps.Container;
var Viewport = comps.Viewport;
var Text = comps.Text;
var Link = comps.Link;
var Avatar = comps.Avatar;
var Preview = comps.Preview;
var Player = comps.Player;
var Recommend = comps.Recommend;
var StarVote = comps.StarVote;
var VideoTool = comps.VideoTool;
var Panel = comps.Panel;

var recommendJsonObj = {
    activeIndex: 0,
    data: [
        {
            tabName: '相关系列课',
            items: [
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: [
                        {
                            name: '一.SEO的概念',
                            items: [
                                {
                                    name: '讲师介绍',
                                    time: '12:00'
                                },
                                {
                                    name: '讲师介绍二',
                                    time: '12:00'
                                }
                            ]
                        },
                        {
                            name: '二.SEO的概念',
                            items: [
                                {
                                    name: '讲师介绍',
                                    time: '12:00'
                                },
                                {
                                    name: '讲师介绍二',
                                    time: '12:00'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: [
                        {
                            name: '讲师介绍',
                            time: '12:00'
                        },
                        {
                            name: '讲师介绍',
                            time: '12:00'
                        }
                    ]
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                },
                {
                    name: '装修精品旺铺留住买家',
                    count: 10,
                    items: []
                }
            ]
        },
        {
            tabName: '相关课程',
            items: [
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '5:00',
                    img: './img/avatar.jpg'
                },
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '6:00',
                    img: './img/avatar.jpg'
                },
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '6:00',
                    img: './img/avatar.jpg'
                },
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '6:00',
                    img: './img/avatar.jpg'
                },
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '6:00',
                    img: './img/avatar.jpg'
                },
                {
                    name: '装修精品旺铺留住买家',
                    type: 'preview',
                    count: 1234,
                    time: '6:00',
                    img: './img/avatar.jpg'
                }
            ]
        }
    ]
};

var viewport = new Viewport({
    items: [
        {
            type: Container,
            items: [
                {
                    type: Container,
                    items: [
                        {
                            type: Container,
                            layout: 'hbox',
                            items: [
                                //{
                                //    type: Recommend,
                                //    data: recommendJsonObj
                                //},
                                {
                                    type: Player,
                                    style: {
                                        width: 930
                                    },
                                    cls: 'o-player',
                                    toolbar: [
                                        {
                                            type: StarVote
                                        },
                                        {
                                            type: VideoTool,
                                            style: {
                                                float: 'right',
                                                marginRight: 30,
                                                marginTop: 3
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: Recommend,
                                    data: recommendJsonObj
                                }
                            ],
                            style: {
                                height: 480,
                                horizontalAlign: 'center',
                                width: 1185,
                                marginBottom: 10,
                                paddingLeft: 10,
                                backgroundImage: 'url(//cbu01.alicdn.com/cms/upload/2014/525/130/2031525_1751704920.png)',
                                backgroundPositionX: -3,
                                backgroundPositionY: -300
                            }
                        },
                        {
                            type: Container,
                            layout: 'hbox',
                            style: {
                                horizontalAlign: 'center',
                                width: 1185
                            },
                            items: [
                                {
                                    type: Panel,
                                    title: '装修精品旺铺留住买家',
                                    style: {
                                        height: 217,
                                        width: 940
                                    },
                                    items: [
                                        {
                                            type: Container,
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    type: Text,
                                                    label: '学习人数',
                                                    data: 888,
                                                    style: {
                                                        marginRight: 30
                                                    }
                                                },
                                                {
                                                    type: Text,
                                                    label: '收藏人数',
                                                    data: 526,
                                                    style: {
                                                        marginRight: 30
                                                    }
                                                },
                                                {
                                                    type: Text,
                                                    label: '学员评分',
                                                    data: '5分'
                                                }
                                                ,
                                                {
                                                    type: Text,
                                                    label: '发布时间',
                                                    data: '2015-09-30',
                                                    style: {
                                                        horizontalAlign: 'right'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            type: Container,
                                            items: [
                                                {
                                                    type: Text,
                                                    label: '课程简介',
                                                    labelAlign: 'top',
                                                    style: {
                                                        lineHeight: 18,
                                                        height: 76
                                                    },
                                                    data: '央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,'
                                                }
                                            ]
                                        },
                                        {
                                            type: Container,
                                            items: [
                                                {
                                                    type: Link,
                                                    label: '标签',
                                                    underline: true,
                                                    data: ['网络支付', '店铺自诊', '理财']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    id: 'teacher-summary',
                                    cls: 'last dark',
                                    title: '讲师简介',
                                    ref: 'teacherSummaryPanel',
                                    style: {
                                        height: 217,
                                        width: 242
                                    },
                                    items: [
                                        {
                                            type: Container,
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    type: Avatar
                                                },
                                                {
                                                    type: Container,
                                                    items: [
                                                        {
                                                            type: Text,
                                                            label: '讲师',
                                                            data: '名字',
                                                            style: {
                                                                marginBottom: 10
                                                            }
                                                        },
                                                        {
                                                            type: Text,
                                                            data: '内容内容内容内容内容内容内容内容内.',
                                                            style: {
                                                                lineHeight: 18,
                                                                marginBottom: 10
                                                            }
                                                        },
                                                        {
                                                            type: Link,
                                                            cls: 'highLight',
                                                            data: '了解更多&gt;',
                                                            listeners: {
                                                                click: function () {
                                                                    alert('You clicked a link.');
                                                                    Olive.getComp('teacherSummaryPanel').destroy();
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 110
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: Container,
                            layout: 'hbox',
                            style: {
                                horizontalAlign: 'center',
                                width: 1185,
                                padding: 0
                            },
                            items: [
                                {
                                    type: Panel,
                                    title: '说说您的观点',
                                    style: {
                                        height: 800,
                                        width: 940,
                                        borderRight: 0
                                    },
                                    items: []
                                },
                                {
                                    type: Container,
                                    items: [
                                        {
                                            type: Panel,
                                            title: '相关课程',
                                            cls: 'last dark',
                                            style: {
                                                width: 242
                                            },
                                            items: [
                                                {
                                                    type: Preview,
                                                    data: {
                                                        title: '如何提升您首图的点击率',
                                                        score: '4.0',
                                                        studyCount: 9999,
                                                        url: '',
                                                        img: './img/avatar.jpg'
                                                    },
                                                    style: {
                                                        marginBottom: 20
                                                    }
                                                },
                                                {
                                                    type: Preview,
                                                    data: {
                                                        title: '如何提升您首图的点击率',
                                                        score: '4.0',
                                                        studyCount: 9999,
                                                        url: '',
                                                        img: './img/avatar.jpg'
                                                    },
                                                    style: {
                                                        marginBottom: 20
                                                    }
                                                },
                                                {
                                                    type: Preview,
                                                    data: {
                                                        title: '如何提升您首图的点击率',
                                                        score: '4.0',
                                                        studyCount: 9999,
                                                        url: '',
                                                        img: './img/avatar.jpg'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            type: Panel,
                                            cls: 'last dark',
                                            moreBtn: '更多>',
                                            title: '热门课程',
                                            items: [
                                                {
                                                    type: Link,
                                                    isListItem: true,
                                                    data: '[原材料]如何打造五星产品首图',
                                                    style: {
                                                        marginBottom: 15
                                                    }
                                                },
                                                {
                                                    type: Link,
                                                    isListItem: true,
                                                    data: '[原材料]如何打造五星产品首图',
                                                    style: {
                                                        marginBottom: 15
                                                    }
                                                }, {
                                                    type: Link,
                                                    isListItem: true,
                                                    data: '[原材料]如何打造五星产品首图',
                                                    style: {
                                                        marginBottom: 15
                                                    }
                                                }, {
                                                    type: Link,
                                                    isListItem: true,
                                                    data: '[原材料]如何打造五星产品首图',
                                                    style: {
                                                        marginBottom: 15
                                                    }
                                                }, {
                                                    type: Link,
                                                    isListItem: true,
                                                    data: '[原材料]如何打造五星产品首图',
                                                    style: {
                                                        marginBottom: 15
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }


                            ]
                        }
                    ],
                    style: {
                        background: 'url(//cbu01.alicdn.com/cms/upload/2014/671/088/1880176_1867113056.png) repeat center 0'
                    }
                }
            ],
            style: {
                background: 'url(//cbu01.alicdn.com/cms/upload/2013/873/368/1863378_1867113056.png) repeat center 0'
            }
        }
    ]
});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');