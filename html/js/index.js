// Monthly Sessions Chart
const monthlySessionsChart = echarts.init(document.getElementById('monthly-sessions-chart'));
const monthlySessionsOption = {
    animation: false,
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#e5e7eb',
        textStyle: {
            color: '#1f2937'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        axisLine: {
            lineStyle: {
                color: '#e5e7eb'
            }
        },
        axisLabel: {
            color: '#6b7280'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#6b7280'
        },
        splitLine: {
            lineStyle: {
                color: '#f3f4f6'
            }
        }
    },
    series: [
        {
            name: 'Desktop',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                width: 3,
                color: 'rgba(87, 181, 231, 1)'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(87, 181, 231, 0.2)'
                    }, {
                        offset: 1, color: 'rgba(87, 181, 231, 0.01)'
                    }]
                }
            },
            data: [1200, 1320, 1500, 2100, 2800, 3287]
        },
        {
            name: 'Mobile',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                width: 3,
                color: 'rgba(141, 211, 199, 1)'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(141, 211, 199, 0.2)'
                    }, {
                        offset: 1, color: 'rgba(141, 211, 199, 0.01)'
                    }]
                }
            },
            data: [820, 932, 1100, 1340, 1600, 1850]
        }
    ]
};
monthlySessionsChart.setOption(monthlySessionsOption);
// Traffic Sources Chart
const trafficSourcesChart = echarts.init(document.getElementById('traffic-sources-chart'));
const trafficSourcesOption = {
    animation: false,
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#e5e7eb',
        textStyle: {
            color: '#1f2937'
        }
    },
    legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: {
            color: '#6b7280'
        }
    },
    series: [
        {
            name: 'Traffic Sources',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 48, name: 'Direct', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                { value: 32, name: 'Organic Search', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
                { value: 15, name: 'Social Media', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
                { value: 5, name: 'Referral', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
            ]
        }
    ]
};
trafficSourcesChart.setOption(trafficSourcesOption);

// Catalogue Usage Chart
const catalogueUsageChart = echarts.init(document.getElementById('catalogue-usage-chart'));
const catalogueUsageOption = {
    animation: false,
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#e5e7eb',
        textStyle: {
            color: '#1f2937'
        }
    },
    legend: {
        data: ['Product Views', 'Inquiries', 'Shares'],
        bottom: 0,
        textStyle: {
            color: '#6b7280'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        axisLine: {
            lineStyle: {
                color: '#e5e7eb'
            }
        },
        axisLabel: {
            color: '#6b7280'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#6b7280'
        },
        splitLine: {
            lineStyle: {
                color: '#f3f4f6'
            }
        }
    },
    series: [
        {
            name: 'Product Views',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                color: 'rgba(87, 181, 231, 1)',
                borderRadius: [4, 4, 0, 0]
            },
            data: [320, 332, 401, 434, 490, 530]
        },
        {
            name: 'Inquiries',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                color: 'rgba(141, 211, 199, 1)',
                borderRadius: [4, 4, 0, 0]
            },
            data: [120, 132, 101, 134, 90, 144]
        },
        {
            name: 'Shares',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                color: 'rgba(251, 191, 114, 1)',
                borderRadius: [4, 4, 0, 0]
            },
            data: [62, 82, 91, 84, 109, 110]
        }
    ]
};
catalogueUsageChart.setOption(catalogueUsageOption);
// Resize charts when window resizes
window.addEventListener('resize', function() {
    monthlySessionsChart.resize();
    trafficSourcesChart.resize();
    catalogueUsageChart.resize();
});