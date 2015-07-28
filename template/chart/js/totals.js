/**
 * Created by Shawoe on 2015/7/14.
 */
(function(){
    var myChart = echarts.init(document.getElementById('totals'));
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                formatter : function (params){
                    return 100 - params.value + '%'
                },
                textStyle: {
                    baseline : 'top'
                }
            }
        }
    }
    var labelBottom = {
        normal : {
            color: '#ccc',
            label : {
                show : true,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = [40, 55];
    var option = {
        legend: {
            x : 'center',
            y : 'center',
            data:[
                '垃圾处理','污水处理','泔水处理','泔水油','肥料产出物',
                '油水分离', '废物回收', '垃圾分类', '油污分离', '其他'
            ]
        },
        title : {
            text: '主要指标运行状态对比',
            //subtext: 'from global web index',
            x: 'center',
            y:'50'
        },
        toolbox: {
            show : false,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            width: '20%',
                            height: '30%',
                            itemStyle : {
                                normal : {
                                    label : {
                                        formatter : function (params){
                                            return 'other\n' + params.value + '%\n'
                                        },
                                        textStyle: {
                                            baseline : 'middle'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                type : 'pie',
                center : ['10%', '30%'],
                radius : radius,
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:46, itemStyle : labelBottom},
                    {name:'垃圾处理', value:54,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['30%', '30%'],
                radius : radius,
                x:'20%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:35, itemStyle : labelBottom},
                    {name:'污水处理', value:65,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['50%', '30%'],
                radius : radius,
                x:'40%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:27, itemStyle : labelBottom},
                    {name:'泔水处理', value:73,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '30%'],
                radius : radius,
                x:'60%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:42, itemStyle : labelBottom},
                    {name:'肥料产出物', value:58,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['90%', '30%'],
                radius : radius,
                x:'80%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:36, itemStyle : labelBottom},
                    {name:'油水分离', value:64,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['10%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:32, itemStyle : labelBottom},
                    {name:'泔水油', value:68,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['30%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'20%',    // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:47, itemStyle : labelBottom},
                    {name:'油污分离', value:53,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['50%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'40%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:46, itemStyle : labelBottom},
                    {name:'废物回收', value:54,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'60%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:51, itemStyle : labelBottom},
                    {name:'垃圾分类', value:49,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['90%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'80%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:46, itemStyle : labelBottom},
                    {name:'其他', value:64,itemStyle : labelTop}
                ]
            }
        ]
    };

    myChart.setOption(option);
})();


