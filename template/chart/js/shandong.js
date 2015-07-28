/**
 * Created by Shawoe on 2015/7/14.
 */
(function(){

    var myChart = echarts.init(document.getElementById('shandong'));
    var option = {
        title : {
            text: '物联网设备运行状态实时监控地图',
            subtext: '同创智软 · 物联网监管系统（环保设备）',
            sublink: 'https://github.com/shawoe/modespring',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['运行时长','断电警报']
        },
        dataRange: {
            min : 0,
            max : 500,
            calculable : true,
            color: ['maroon','purple','red','orange','yellow','lightgreen']
        },
        toolbox: {
            show : false,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: '运行时长',
                type: 'map',
                mapType: '山东',
                hoverable: false,
                roam:false,
                data : [],
                markPoint : {
                    symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                    itemStyle: {
                        normal: {
                            borderColor: '#87cefa',
                            borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                            label: {
                                    show : false
                                }
                            },
                        emphasis: {
                            borderColor: '#1e90ff',
                            borderWidth: 5,
                            label: {
                                show: true
                            }
                        }
                    },
                    data : [
                        {name: "招远", value: 12},
                        {name: "青岛", value: 18},
                        {name: "乳山", value: 18},
                        {name: "莱西", value: 21},
                        {name: "日照", value: 21},
                        {name: "胶南", value: 22},
                        {name: "文登", value: 25},
                        {name: "威海", value: 25},
                        {name: "烟台", value: 28},
                        {name: "即墨", value: 30},
                        {name: "莱州", value: 32},
                        {name: "荣成", value: 34},
                        {name: "蓬莱", value: 37},
                        {name: "寿光", value: 40},
                        {name: "平度", value: 44},
                        {name: "章丘", value: 45},
                        {name: "胶州", value: 52},
                        {name: "东营", value: 62},
                        {name: "潍坊", value: 65},
                        {name: "枣庄", value: 84},
                        {name: "淄博", value: 85},
                        {name: "济南", value: 92},
                        {name: "临沂", value: 103},
                        {name: "泰安", value: 112},
                        {name: "聊城", value: 116},
                        {name: "德州", value: 120},
                        {name: "济宁", value: 120},
                        {name: "莱芜", value: 148},
                        {name: "菏泽", value: 194}
                    ]
                },
                geoCoord: {
                    "招远":[120.38,37.35],
                    "青岛":[120.33,36.07],
                    "乳山":[121.52,36.89],
                    "莱西":[120.53,36.86],
                    "日照":[119.46,35.42],
                    "胶南":[119.97,35.88],
                    "文登":[122.05,37.2],
                    "威海":[122.1,37.5],
                    "烟台":[121.39,37.52],
                    "即墨":[120.45,36.38],
                    "莱州":[119.942327,37.177017],
                    "荣成":[122.41,37.16],
                    "蓬莱":[120.75,37.8],
                    "潍坊":[119.157543,36.721669],
                    "寿光":[118.73,36.86],
                    "潍坊":[119.164066,36.71035],
                    "平度":[119.97,36.77],
                    "章丘":[117.53,36.72],
                    "胶州":[120.03336,36.264622],
                    "东营":[118.49,37.46],
                    "滨州":[118.03,37.36],
                    "枣庄":[117.57,34.86],
                    "淄博":[118.05,36.78],
                    "济南":[117,36.65],
                    "临沂":[118.35,35.05],
                    "泰安":[117.13,36.18],
                    "聊城":[115.97,36.45],
                    "德州":[116.29,37.45],
                    "济宁":[116.59,35.38],
                    "莱芜":[117.67,36.19],
                    "菏泽":[115.480656,35.23375],
                }
            },
            {
                name: '断电警报',
                type: 'map',
                mapType: '山东',
                data:[],
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 10 + v/100
                    },
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        }
                    },
                    data : [
                        {name: "菏泽", value: 194},
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);


})();