/**
 * Created by Shawoe on 2015/7/16.
 */
(function(){
    var myChart = echarts.init(document.getElementById('power'));
    var myChart2 = echarts.init(document.getElementById('power2'));
    var myChart3 = echarts.init(document.getElementById('power3'));
    var
        option = {
            title : {
                text: '预算 vs 开销（Budget vs spending）',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
                data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            polar : [
                {
                    indicator : [
                        { text: '销售（sales）', max: 6000},
                        { text: '管理（Administration）', max: 16000},
                        { text: '信息技术（Information Techology）', max: 30000},
                        { text: '客服（Customer Support）', max: 38000},
                        { text: '研发（Development）', max: 52000},
                        { text: '市场（Marketing）', max: 25000}
                    ]
                }
            ],
            calculable : true,
            series : [
                {
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算分配（Allocated Budget）'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销（Actual Spending）'
                        }
                    ]
                }
            ]
        };

    myChart.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
})();


