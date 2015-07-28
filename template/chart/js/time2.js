/**
 * Created by Shawoe on 2015/7/16.
 */

(function () {

    var myChart = echarts.init(document.getElementById('time2'));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['未处理','正在处理','已处理']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['8月','9月','10月','11月','12月','1月','2月','3月','4月','5月','6月','7月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'未处理',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[10, 12, 21, 54, 260, 430, 610,670,780,760,660,612]
            },
            {
                name:'正在处理',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[30, 182, 234,345,567,791,775,687,435, 130, 30, 10]
            },
            {
                name:'已处理',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[1320, 1132, 601, 579,586,689,769,890,997,967,997,1212,]
            }
        ]
    };

    myChart.setOption(option);


})();
