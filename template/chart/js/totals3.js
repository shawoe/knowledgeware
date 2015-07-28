/**
 * Created by Shawoe on 2015/7/16.
 */
(function () {
    var myChart = echarts.init(document.getElementById('totals3'));
    var option = {
        title : {
            text: '新旧程度与故障时长分布'
        },
        tooltip : {
            trigger: 'item'
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
        dataRange: {
            min: 0,
            max: 100,
            y: 'center',
            text:['高','低'],           // 文本，默认为数值文本
            color:['lightgreen','yellow'],
            calculable : true
        },
        xAxis : [
            {
                type : 'value',
                scale : true
            }
        ],
        yAxis : [
            {
                type : 'value',
                position:'right',
                scale : true
            }
        ],
        animation: false,
        series : [
            {
                name:'scatter1',
                type:'scatter',
                symbolSize:5,
                data: (function () {
                    var d = [];
                    var len = 500;
                    var value;
                    while (len--) {
                        value = (Math.random()*100).toFixed(2) - 0;
                        d.push([
                            (Math.random()*value + value).toFixed(2) - 0,
                            (Math.random()*value).toFixed(2) - 0,
                            value
                        ]);
                    }
                    return d;
                })()
            }
        ]
    };


    myChart.setOption(option);
})();

