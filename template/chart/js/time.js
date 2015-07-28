/**
 * Created by Shawoe on 2015/7/16.
 */

(function () {

    var myChart = echarts.init(document.getElementById('time'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['垃圾处理', '泔水处理', '肥料产出物', '泔水油', '污水处理']
        },
        toolbox: {
            show: false,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['8月','9月','10月','11月','12月','1月','2月','3月','4月','5月','6月','7月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '垃圾处理',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [120, 132, 101, 134, 90, 230, 210,150,140,140,124,135]
            },
            {
                name: '泔水处理',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [220, 182, 191, 234, 290, 330, 310,243,223,235,245,236]
            },
            {
                name: '肥料产出物',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [150, 232, 201, 154, 190, 330, 410, 134, 90, 230, 210,150]
            },
            {
                name: '泔水油',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [320, 332, 301, 334, 390, 330, 320, 330, 310,243,223,235]
            },
            {
                name: '污水处理',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [820, 932, 901, 934, 1290, 1330, 1320,1079,987,876,1079,1212]
            }
        ]
    };
    myChart.setOption(option);


})();
