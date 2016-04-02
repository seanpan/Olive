//var comps = require('../src/app.js').components;
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

//Ternary Binary HBox VBox

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
    responsive: true,
    style: {
        background: 'url(//cbu01.alicdn.com/cms/upload/2013/873/368/1863378_1867113056.png) repeat center 0'
    },
    items: [
        {
            type: Container,
            cls: 'container',
            style: {
                background: 'url(//cbu01.alicdn.com/cms/upload/2013/873/368/1863378_1867113056.png) repeat center 0'
            },
            items: [
                {
                    type: Container,
                    cls: 'row',
                    items: [
                        {
                            type: Container,
                            cls: 'col-xs-60',
                            items: [
                                {
                                    type: Container,
                                    cls: 'col-offset-r-fixed-s-12',
                                    items:[
                                        {
                                            type: Player,
                                            //TODO a plugin to force ration when load or resize page
                                            forceRatio: true,
                                            toolbar: [
                                                {
                                                    type: StarVote
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            style: {
                                height: 480
                            }
                        },
                        {
                            type: Container,
                            cls: 'hidden-xxs hidden-xs col-fixed-s-12 sub-right-s-12',
                            items: [
                                {
                                    type: Recommend,
                                    data: recommendJsonObj
                                }
                            ],
                            style: {
                                height: 480
                            }
                        }
                    ]
                },
                {
                    type: Container,
                    cls: 'row',
                    items: [
                        {
                            type: Container,
                            cls: 'col-xs-60 col-s-45',
                            items: [
                                {
                                    type: Panel,
                                    title: '装修精品旺铺留住买家',
                                    style: {
                                        height: 217
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
                                }
                            ]
                        },
                        {
                            type: Container,
                            cls: 'col-xs-60 col-s-15',
                            items: [
                                {
                                    type: Panel,
                                    cls: 'last',
                                    title: '说说您的观点',
                                    style: {
                                        height: 217
                                    },
                                    items: []
                                }
                            ]
                        }
                    ]
                },
                {
                    type: Container,
                    cls: 'row',
                    items: [
                        {
                            type: Container,
                            cls: 'col-xs-60 col-s-45',
                            items: [
                                {
                                    type: Panel,
                                    title: '装修精品旺铺留住买家',
                                    style: {
                                        height: 600
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
                                }
                            ]
                        },
                        {
                            type: Container,
                            cls: 'col-xs-60 col-s-15',
                            items: [
                                {
                                    type: Panel,
                                    cls: 'last',
                                    title: '说说您的观点',
                                    style: {
                                        height: 600
                                    },
                                    items: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');
