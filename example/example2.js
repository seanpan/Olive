var ThemeEnum = Olive.theme.ThemeEnum;
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
    theme: ThemeEnum.ALI1688,
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
                            items: [
                                {
                                    type: Recommend,
                                    data: recommendJsonObj
                                },
                                {
                                    type: Player,
                                    toolbar: [
                                        {
                                            type: StarVote
                                        }
                                    ]
                                }
                            ],
                            style: {
                                height: 480,
                                horizontalAlign: 'center',
                                width: 1185,
                                marginBottom: 10,
                                background: 'url(//cbu01.alicdn.com/cms/upload/2014/525/130/2031525_1751704920.png) no-repeat scroll -3px -300px'
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
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'last dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
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
                                width: 1185
                            },
                            items: [
                                {
                                    type: Panel,
                                    cls: 'dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'last',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
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
                                width: 1185
                            },
                            items: [
                                {
                                    type: Panel,
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: Panel,
                                    cls: 'last dark',
                                    title: '讲师简介',
                                    style: {
                                        height: 217,
                                        width: 295
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
                                                                    console.log(this);
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    style: {
                                                        width: 112
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
});

//渲染到页面,也可渲染到其他组件内
viewport.renderTo('body');