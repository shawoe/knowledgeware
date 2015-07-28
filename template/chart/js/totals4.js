/**
 * Created by Shawoe on 2015/7/16.
 */
(function () {
    var myChart = echarts.init(document.getElementById('totals4'));
    var option = {
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            data:['sin','cos']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                type : 'value',
                scale:true
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true
            }
        ],
        series : [
            {
                name:'sin',
                type:'scatter',
                large: true,
                data: (function () {
                    var d = [];
                    var len = 10000;
                    var x = 0;
                    while (len--) {
                        x = (Math.random() * 10).toFixed(3) - 0;
                        d.push([
                            x,
                            //Math.random() * 10
                            (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                        ]);
                    }
                    //console.log(d)
                    return d;
                })()
            },
            {
                name:'cos',
                type:'scatter',
                large: true,
                data: (function () {
                    var d = [];
                    var len = 10000;
                    var x = 0;
                    while (len--) {
                        x = (Math.random() * 10).toFixed(3) - 0;
                        d.push([
                            x,
                            //Math.random() * 10
                            (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                        ]);
                    }
                    //console.log(d)
                    return d;
                })()
            }
        ]
    };


    myChart.setOption(option);
})();

