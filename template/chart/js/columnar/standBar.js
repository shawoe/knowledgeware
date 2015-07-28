/**
 * Created by dony on 2015/7/14.
 */


function standBar(eleId) {
    var myChart = echarts.init(document.getElementById(eleId));


    var option = {
        title : {
            text: '上电断电图表',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AizJXrAEa'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
            }
        },
        legend: {
            selectedMode:false,
            data:['上电', '断电']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['Cosco','CMA','APL','OOCL','Wanhai','Zim']
            }
        ],
        yAxis : [
            {
                type : 'value',
                boundaryGap: [0, 0.1]
            }
        ],
        series : [
            {
                name:'上电',
                type:'bar',
                stack: 'sum',
                barCategoryGap: '50%',
                itemStyle: {
                    normal: {
                        color: 'tomato',
                        barBorderColor: 'tomato',
                        barBorderWidth: 6,
                        barBorderRadius:0,
                        label : {
                            show: true, position: 'insideTop'
                        }
                    }
                },
                data:[260, 200, 220, 120, 100, 80]
            },
            {
                name:'断电',
                type:'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: '#fff',
                        barBorderColor: 'tomato',
                        barBorderWidth: 6,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'top',
                            formatter: function (params) {
                                for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                    if (option.xAxis[0].data[i] == params.name) {
                                        return option.series[0].data[i] + params.value;
                                    }
                                }
                            },
                            textStyle: {
                                color: 'tomato'
                            }
                        }
                    }
                },
                data:[40, 80, 50, 80,80, 70]
            }
        ]
    };





    myChart.setOption(option);
}