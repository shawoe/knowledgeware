/**
 * Created by Shawoe on 2015/7/16.
 */

(function () {

    var myChart = echarts.init(document.getElementById('area'));
    var itemStyle = {
        normal:{label:{
            show:true,
            formatter:'{b}',
            textStyle: {fontSize: 20,fontWeight : 'bold'}
        }},
        emphasis:{label:{show:true}}
    };
    var option = {
        title : {
            text : '2015年主要城市总产出量分布',
            subtext : '同创智软 · 物联网监管系统（环保设备）',
            sublink : 'https://github.com/shawoe/modespring',
            x : 'center'
        },
        tooltip : {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter : function (params) {
                var value = params.value + '';
                value = value.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + value + ' Billion';
            }
        },
        toolbox: {
            show : false,
            x: 'right',
            y: 'bottom',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        dataRange: {
            orient: 'horizontal',
            x : 'center',
            y: 'top',
            min: 0,
            max: 24000,
            splitNumber: 0,            // 分割段数，默认为5
            text:['16,000B','2,000B'],
            calculable : true,
            itemWidth:40,
            color: ['red','yellow','lightskyblue']
        },
        series : [
            {
                name: '北京',
                type: 'map',
                mapType: '北京',
                mapLocation: {x:'5%', y:'10%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '朝阳区', value : 7038},
                    {name : '海淀区', value : 6995},
                    {name : '西城区', value : 5157},
                    {name : '东城区', value : 2895},
                    {name : '大兴区', value : 2430},
                    {name : '顺义区', value : 2206},
                    {name : '丰台区', value : 1845},
                    {name : '昌平区', value : 1000},
                    {name : '房山区', value : 890},
                    {name : '通州区', value : 896},
                    {name : '石景山区', value : 687},
                    {name : '怀柔区', value : 373},
                    {name : '密云县', value : 357},
                    {name : '平谷区', value : 306},
                    {name : '门头沟区', value : 230},
                    {name : '延庆县', value : 166},

                ]
            },
            {
                name: '山东',
                type: 'map',
                mapType: '山东',
                mapLocation: {x:'30%', y:'10%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '济南市', value : 11227},
                    {name : '青岛市', value : 16100.3},
                    {name : '烟台市', value : 13510},
                    {name : '潍坊市', value : 8024},
                    {name : '淄博市', value : 7114},
                    {name : '济宁市', value : 6378},
                    {name : '临沂市', value : 6026},
                    {name : '东营市', value : 6001},
                    {name : '泰安市', value : 5094},
                    {name : '威海市', value : 4676},
                    {name : '德州市', value : 4460},
                    {name : '聊城市', value : 4291},
                    {name : '滨州市', value : 3975},
                    {name : '菏泽市', value : 3574},
                    {name : '枣庄市', value : 3574},
                    {name : '日照市', value : 2705},
                    {name : '莱芜市', value : 1262}
                ]
            },
            {
                name: '江苏',
                type: 'map',
                mapType: '江苏',
                mapLocation: {x:'55%', y:'10%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '南京市', value : 12291},
                    {name : '苏州市', value : 21434},
                    {name : '无锡市', value : 13760},
                    {name : '徐州市', value : 7103},
                    {name : '常州市', value : 7160},
                    {name : '南通市', value : 8160},
                    {name : '连云港市', value : 2821},
                    {name : '淮安市', value : 3380},
                    {name : '盐城市', value : 5542},
                    {name : '扬州市', value : 5260},
                    {name : '镇江市', value : 4620},
                    {name : '泰州市', value : 4845},
                    {name : '宿迁市', value : 2610}

                ]
            },
            {
                name: '安徽',
                type: 'map',
                mapType: '安徽',
                mapLocation: {x:'80%', y:'10%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '合肥市', value : 8328},
                    {name : '芜湖市', value : 3747},
                    {name : '安庆市', value : 2719},
                    {name : '马鞍山市', value : 2464},
                    {name : '滁州市', value : 1941},
                    {name : '阜阳市', value : 1925},
                    {name : '宿州市', value : 1830},
                    {name : '六安市', value : 1836},
                    {name : '蚌埠市', value : 1780},
                    {name : '宣城市', value : 1515},
                    {name : '淮南市', value : 1563},
                    {name : '亳州市', value : 1431},
                    {name : '淮北市', value : 1241},
                    {name : '铜陵市', value : 1242},
                    {name : '黄山市', value : 849},
                    {name : '池州市', value : 832},
                    {name : '巢湖市', value : 932}
                ]
            },
            {
                name: '广东',
                type: 'map',
                mapType: '广东',
                mapLocation: {x:'5%', y:'55%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '广州市', value : 27102},
                    {name : '深圳市', value : 26900},
                    {name : '佛山市', value : 13418},
                    {name : '东莞市', value : 10020},
                    {name : '中山市', value : 4894},
                    {name : '惠州市', value : 4736},
                    {name : '茂名市', value : 3902},
                    {name : '江山市', value : 3820},
                    {name : '湛江市', value : 3740},
                    {name : '珠海市', value : 3007},
                    {name : '肇庆市', value : 2907},
                    {name : '汕头市', value : 2830},
                    {name : '揭阳市', value : 2760},
                    {name : '清远市', value : 2058},
                    {name : '韶关市', value : 1776},
                    {name : '阳江市', value : 1754},
                    {name : '梅州市', value : 1491},
                    {name : '河源市', value : 1230},
                    {name : '汕尾市', value : 1220},
                    {name : '云浮市', value : 1080}

                ]
            },
            {
                name: '福建',
                type: 'map',
                mapType: '福建',
                mapLocation: {x:'33%', y:'55%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '福州市', value : 8437},
                    {name : '厦门市', value : 3634},
                    {name : '泉州市', value : 9453},
                    {name : '漳州市', value : 4025},
                    {name : '龙岩市', value : 2750},
                    {name : '三明市', value : 2686},
                    {name : '莆田市', value : 2405},
                    {name : '宁德市', value : 2155},
                    {name : '南平市', value : 1993}
                ]
            },
            {
                name: '江西',
                type: 'map',
                mapType: '江西',
                mapLocation: {x:'55%', y:'55%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '赣州市', value : 3001},
                    {name : '南昌市', value : 6001},
                    {name : '九江市', value : 2840},
                    {name : '上饶市', value : 2730},
                    {name : '宜春市', value : 2012},
                    {name : '吉安市', value : 1660},
                    {name : '新余市', value : 2004},
                    {name : '抚州市', value : 1650},
                    {name : '萍乡市', value : 1466},
                    {name : '景德镇市', value : 1256},
                    {name : '鹰潭市', value : 964},
                ]
            },
            {
                name: '浙江',
                type: 'map',
                mapType: '浙江',
                mapLocation: {x:'76%', y:'55%',width:'22%',height:'35%'},
                itemStyle:{
                    normal:{
                        label:{
                            show : true
                        }
                    },
                    emphasis:{
                        label:{
                            show : true
                        }
                    }
                },
                data:[
                    {name : '杭州市', value : 15607},
                    {name : '温州市', value : 7300},
                    {name : '宁波市', value : 1349},
                    {name : '嘉兴市', value : 5769},
                    {name : '湖州市', value : 3923},
                    {name : '绍兴市', value : 7240},
                    {name : '金华市', value : 5400},
                    {name : '义乌市', value : 1605},
                    {name : '衢州市', value : 1965},
                    {name : '舟山市', value : 1703},
                    {name : '台州市', value : 5854},
                    {name : '丽水市', value : 1770},

                ]
            }
        ]
    };


    myChart.setOption(option);


})();
