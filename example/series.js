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
var Hero = Olive.components.Hero;
var CourseList = Olive.components.CourseList;

var jsonObj = {
    data: [
        {
            name: '一.SEO的概念',
            items: [
                {
                    name: '讲师介绍',
                    time: '12:00',
                    state: 'complete'
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
                },
                {
                    name: '讲师介绍二',
                    time: '12:00',
                    state: '05:10'
                }
            ]
        }
    ],
    data2: [
        {
            name: '什么是SEO',
            time: '12:00',
            state: 'complete'
        },
        {
            name: '讲师介绍',
            time: '12:00',
            state: '05:10'
        },
        {
            name: '讲师介绍',
            time: '12:00',
            state: 'incomplete'
        }
    ]
};

var viewport = new Viewport({
    items: [
        {
            type: Container,
            style: {
                background: 'url(//cbu01.alicdn.com/cms/upload/2013/873/368/1863378_1867113056.png) repeat center 0'
            },
            items: [
                {
                    type: Container,
                    style: {
                        background: 'url(//cbu01.alicdn.com/cms/upload/2014/671/088/1880176_1867113056.png) repeat center 0'
                    },
                    items: [
                        {
                            type: Container,
                            layout: 'hbox',
                            style: {
                                horizontalAlign: 'center',
                                width: 1185
                            },
                            items: [
                                {
                                    type: Hero,
                                    title: '解读阿萨德发撒到噶速度哈是多哈是多哈时代',
                                    style: {
                                        marginBottom: 20
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
                                    title: '课程目录',
                                    cls: 'last',
                                    style: {
                                        //height: 600,
                                        width: 1184,
                                        marginBottom: 20
                                    },
                                    items: [
                                        {
                                            type: Container,
                                            style: {
                                                marginTop: 30,
                                                marginLeft: 10,
                                                marginRight: 10
                                            },
                                            items: [
                                                {
                                                    type: CourseList,
                                                    data: jsonObj.data
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Container,
                                    style: {
                                        horizontalAlign: 'center',
                                        width: 1185
                                    },
                                    items: [
                                        {
                                            type: Panel,
                                            title: '讲师简介',
                                            style: {
                                                height: 280,
                                                width: 1185
                                            },
                                            items: [
                                                {
                                                    type: Container,
                                                    layout: 'hbox',
                                                    items: [
                                                        {
                                                            type: Preview,
                                                            data: {
                                                                title: '如何提升您首图的点击率',
                                                                score: '4.0',
                                                                studyCount: 9999,
                                                                url: '',
                                                                img: './img/avatar.jpg'
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
                                                }
                                            ]
                                        }
                                    ]
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