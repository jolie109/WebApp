//散点城市分析

function cityMap() {
    var myChart1 = echarts.init(document.getElementById('city-map'));
    var data = [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '金昌', value: 19},
        {name: '泉州', value: 21},
        {name: '莱西', value: 21},
        {name: '日照', value: 21},
        {name: '胶南', value: 22},
        {name: '南通', value: 23},
        {name: '拉萨', value: 24},
        {name: '云浮', value: 24},
        {name: '梅州', value: 25},
        {name: '文登', value: 25},
        {name: '上海', value: 25},
        {name: '攀枝花', value: 25},
        {name: '威海', value: 25},
        {name: '承德', value: 25},
        {name: '厦门', value: 26},
        {name: '汕尾', value: 26},
        {name: '潮州', value: 26},
        {name: '丹东', value: 27},
        {name: '太仓', value: 27},
        {name: '曲靖', value: 27},
        {name: '烟台', value: 28},
        {name: '福州', value: 29},
        {name: '瓦房店', value: 30},
        {name: '即墨', value: 30},
        {name: '抚顺', value: 31},
        {name: '玉溪', value: 31},
        {name: '张家口', value: 31},
        {name: '阳泉', value: 31},
        {name: '莱州', value: 32},
        {name: '湖州', value: 32},
        {name: '汕头', value: 32},
        {name: '昆山', value: 33},
        {name: '宁波', value: 33},
        {name: '湛江', value: 33},
        {name: '揭阳', value: 34},
        {name: '荣成', value: 34},
        {name: '连云港', value: 35},
        {name: '葫芦岛', value: 35},
        {name: '常熟', value: 36},
        {name: '东莞', value: 36},
        {name: '河源', value: 36},
        {name: '淮安', value: 36},
        {name: '泰州', value: 36},
        {name: '南宁', value: 37},
        {name: '营口', value: 37},
        {name: '惠州', value: 37},
        {name: '江阴', value: 37},
        {name: '蓬莱', value: 37},
        {name: '韶关', value: 38},
        {name: '嘉峪关', value: 38},
        {name: '广州', value: 38},
        {name: '延安', value: 38},
        {name: '太原', value: 39},
        {name: '清远', value: 39},
        {name: '中山', value: 39},
        {name: '昆明', value: 39},
        {name: '寿光', value: 40},
        {name: '盘锦', value: 40},
        {name: '长治', value: 41},
        {name: '深圳', value: 41},
        {name: '珠海', value: 42},
        {name: '宿迁', value: 43},
        {name: '咸阳', value: 43},
        {name: '铜川', value: 44},
        {name: '平度', value: 44},
        {name: '佛山', value: 44},
        {name: '海口', value: 44},
        {name: '江门', value: 45},
        {name: '章丘', value: 45},
        {name: '肇庆', value: 46},
        {name: '大连', value: 47},
        {name: '临汾', value: 47},
        {name: '吴江', value: 47},
        {name: '石嘴山', value: 49},
        {name: '沈阳', value: 50},
        {name: '苏州', value: 50},
        {name: '茂名', value: 50},
        {name: '嘉兴', value: 51},
        {name: '长春', value: 51},
        {name: '胶州', value: 52},
        {name: '银川', value: 52},
        {name: '张家港', value: 52},
        {name: '三门峡', value: 53},
        {name: '锦州', value: 54},
        {name: '南昌', value: 54},
        {name: '柳州', value: 54},
        {name: '三亚', value: 54},
        {name: '自贡', value: 56},
        {name: '吉林', value: 56},
        {name: '阳江', value: 57},
        {name: '泸州', value: 57},
        {name: '西宁', value: 57},
        {name: '宜宾', value: 58},
        {name: '呼和浩特', value: 58},
        {name: '成都', value: 58},
        {name: '大同', value: 58},
        {name: '镇江', value: 59},
        {name: '桂林', value: 59},
        {name: '张家界', value: 59},
        {name: '宜兴', value: 59},
        {name: '北海', value: 60},
        {name: '西安', value: 61},
        {name: '金坛', value: 62},
        {name: '东营', value: 62},
        {name: '牡丹江', value: 63},
        {name: '遵义', value: 63},
        {name: '绍兴', value: 63},
        {name: '扬州', value: 64},
        {name: '常州', value: 64},
        {name: '潍坊', value: 65},
        {name: '重庆', value: 66},
        {name: '台州', value: 67},
        {name: '南京', value: 67},
        {name: '滨州', value: 70},
        {name: '贵阳', value: 71},
        {name: '无锡', value: 71},
        {name: '本溪', value: 71},
        {name: '克拉玛依', value: 72},
        {name: '渭南', value: 72},
        {name: '马鞍山', value: 72},
        {name: '宝鸡', value: 72},
        {name: '焦作', value: 75},
        {name: '句容', value: 75},
        {name: '北京', value: 79},
        {name: '徐州', value: 79},
        {name: '衡水', value: 80},
        {name: '包头', value: 80},
        {name: '绵阳', value: 80},
        {name: '乌鲁木齐', value: 84},
        {name: '枣庄', value: 84},
        {name: '杭州', value: 84},
        {name: '淄博', value: 85},
        {name: '鞍山', value: 86},
        {name: '溧阳', value: 86},
        {name: '库尔勒', value: 86},
        {name: '安阳', value: 90},
        {name: '开封', value: 90},
        {name: '济南', value: 92},
        {name: '德阳', value: 93},
        {name: '温州', value: 95},
        {name: '九江', value: 96},
        {name: '邯郸', value: 98},
        {name: '临安', value: 99},
        {name: '兰州', value: 99},
        {name: '沧州', value: 100},
        {name: '临沂', value: 103},
        {name: '南充', value: 104},
        {name: '天津', value: 105},
        {name: '富阳', value: 106},
        {name: '泰安', value: 112},
        {name: '诸暨', value: 112},
        {name: '郑州', value: 113},
        {name: '哈尔滨', value: 114},
        {name: '聊城', value: 116},
        {name: '芜湖', value: 117},
        {name: '唐山', value: 119},
        {name: '平顶山', value: 119},
        {name: '邢台', value: 119},
        {name: '德州', value: 120},
        {name: '济宁', value: 120},
        {name: '荆州', value: 127},
        {name: '宜昌', value: 130},
        {name: '义乌', value: 132},
        {name: '丽水', value: 133},
        {name: '洛阳', value: 134},
        {name: '秦皇岛', value: 136},
        {name: '株洲', value: 143},
        {name: '石家庄', value: 147},
        {name: '莱芜', value: 148},
        {name: '常德', value: 152},
        {name: '保定', value: 153},
        {name: '湘潭', value: 154},
        {name: '金华', value: 157},
        {name: '岳阳', value: 169},
        {name: '长沙', value: 175},
        {name: '衢州', value: 177},
        {name: '廊坊', value: 193},
        {name: '菏泽', value: 194},
        {name: '合肥', value: 229},
        {name: '武汉', value: 273},
        {name: '大庆', value: 279}
    ];
    var geoCoordMap = {
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33],
        '盐城':[120.13,33.38],
        '赤峰':[118.87,42.28],
        '青岛':[120.33,36.07],
        '乳山':[121.52,36.89],
        '金昌':[102.188043,38.520089],
        '泉州':[118.58,24.93],
        '莱西':[120.53,36.86],
        '日照':[119.46,35.42],
        '胶南':[119.97,35.88],
        '南通':[121.05,32.08],
        '拉萨':[91.11,29.97],
        '云浮':[112.02,22.93],
        '梅州':[116.1,24.55],
        '文登':[122.05,37.2],
        '上海':[121.48,31.22],
        '攀枝花':[101.718637,26.582347],
        '威海':[122.1,37.5],
        '承德':[117.93,40.97],
        '厦门':[118.1,24.46],
        '汕尾':[115.375279,22.786211],
        '潮州':[116.63,23.68],
        '丹东':[124.37,40.13],
        '太仓':[121.1,31.45],
        '曲靖':[103.79,25.51],
        '烟台':[121.39,37.52],
        '福州':[119.3,26.08],
        '瓦房店':[121.979603,39.627114],
        '即墨':[120.45,36.38],
        '抚顺':[123.97,41.97],
        '玉溪':[102.52,24.35],
        '张家口':[114.87,40.82],
        '阳泉':[113.57,37.85],
        '莱州':[119.942327,37.177017],
        '湖州':[120.1,30.86],
        '汕头':[116.69,23.39],
        '昆山':[120.95,31.39],
        '宁波':[121.56,29.86],
        '湛江':[110.359377,21.270708],
        '揭阳':[116.35,23.55],
        '荣成':[122.41,37.16],
        '连云港':[119.16,34.59],
        '葫芦岛':[120.836932,40.711052],
        '常熟':[120.74,31.64],
        '东莞':[113.75,23.04],
        '河源':[114.68,23.73],
        '淮安':[119.15,33.5],
        '泰州':[119.9,32.49],
        '南宁':[108.33,22.84],
        '营口':[122.18,40.65],
        '惠州':[114.4,23.09],
        '江阴':[120.26,31.91],
        '蓬莱':[120.75,37.8],
        '韶关':[113.62,24.84],
        '嘉峪关':[98.289152,39.77313],
        '广州':[113.23,23.16],
        '延安':[109.47,36.6],
        '太原':[112.53,37.87],
        '清远':[113.01,23.7],
        '中山':[113.38,22.52],
        '昆明':[102.73,25.04],
        '寿光':[118.73,36.86],
        '盘锦':[122.070714,41.119997],
        '长治':[113.08,36.18],
        '深圳':[114.07,22.62],
        '珠海':[113.52,22.3],
        '宿迁':[118.3,33.96],
        '咸阳':[108.72,34.36],
        '铜川':[109.11,35.09],
        '平度':[119.97,36.77],
        '佛山':[113.11,23.05],
        '海口':[110.35,20.02],
        '江门':[113.06,22.61],
        '章丘':[117.53,36.72],
        '肇庆':[112.44,23.05],
        '大连':[121.62,38.92],
        '临汾':[111.5,36.08],
        '吴江':[120.63,31.16],
        '石嘴山':[106.39,39.04],
        '沈阳':[123.38,41.8],
        '苏州':[120.62,31.32],
        '茂名':[110.88,21.68],
        '嘉兴':[120.76,30.77],
        '长春':[125.35,43.88],
        '胶州':[120.03336,36.264622],
        '银川':[106.27,38.47],
        '张家港':[120.555821,31.875428],
        '三门峡':[111.19,34.76],
        '锦州':[121.15,41.13],
        '南昌':[115.89,28.68],
        '柳州':[109.4,24.33],
        '三亚':[109.511909,18.252847],
        '自贡':[104.778442,29.33903],
        '吉林':[126.57,43.87],
        '阳江':[111.95,21.85],
        '泸州':[105.39,28.91],
        '西宁':[101.74,36.56],
        '宜宾':[104.56,29.77],
        '呼和浩特':[111.65,40.82],
        '成都':[104.06,30.67],
        '大同':[113.3,40.12],
        '镇江':[119.44,32.2],
        '桂林':[110.28,25.29],
        '张家界':[110.479191,29.117096],
        '宜兴':[119.82,31.36],
        '北海':[109.12,21.49],
        '西安':[108.95,34.27],
        '金坛':[119.56,31.74],
        '东营':[118.49,37.46],
        '牡丹江':[129.58,44.6],
        '遵义':[106.9,27.7],
        '绍兴':[120.58,30.01],
        '扬州':[119.42,32.39],
        '常州':[119.95,31.79],
        '潍坊':[119.1,36.62],
        '重庆':[106.54,29.59],
        '台州':[121.420757,28.656386],
        '南京':[118.78,32.04],
        '滨州':[118.03,37.36],
        '贵阳':[106.71,26.57],
        '无锡':[120.29,31.59],
        '本溪':[123.73,41.3],
        '克拉玛依':[84.77,45.59],
        '渭南':[109.5,34.52],
        '马鞍山':[118.48,31.56],
        '宝鸡':[107.15,34.38],
        '焦作':[113.21,35.24],
        '句容':[119.16,31.95],
        '北京':[116.46,39.92],
        '徐州':[117.2,34.26],
        '衡水':[115.72,37.72],
        '包头':[110,40.58],
        '绵阳':[104.73,31.48],
        '乌鲁木齐':[87.68,43.77],
        '枣庄':[117.57,34.86],
        '杭州':[120.19,30.26],
        '淄博':[118.05,36.78],
        '鞍山':[122.85,41.12],
        '溧阳':[119.48,31.43],
        '库尔勒':[86.06,41.68],
        '安阳':[114.35,36.1],
        '开封':[114.35,34.79],
        '济南':[117,36.65],
        '德阳':[104.37,31.13],
        '温州':[120.65,28.01],
        '九江':[115.97,29.71],
        '邯郸':[114.47,36.6],
        '临安':[119.72,30.23],
        '兰州':[103.73,36.03],
        '沧州':[116.83,38.33],
        '临沂':[118.35,35.05],
        '南充':[106.110698,30.837793],
        '天津':[117.2,39.13],
        '富阳':[119.95,30.07],
        '泰安':[117.13,36.18],
        '诸暨':[120.23,29.71],
        '郑州':[113.65,34.76],
        '哈尔滨':[126.63,45.75],
        '聊城':[115.97,36.45],
        '芜湖':[118.38,31.33],
        '唐山':[118.02,39.63],
        '平顶山':[113.29,33.75],
        '邢台':[114.48,37.05],
        '德州':[116.29,37.45],
        '济宁':[116.59,35.38],
        '荆州':[112.239741,30.335165],
        '宜昌':[111.3,30.7],
        '义乌':[120.06,29.32],
        '丽水':[119.92,28.45],
        '洛阳':[112.44,34.7],
        '秦皇岛':[119.57,39.95],
        '株洲':[113.16,27.83],
        '石家庄':[114.48,38.03],
        '莱芜':[117.67,36.19],
        '常德':[111.69,29.05],
        '保定':[115.48,38.85],
        '湘潭':[112.91,27.87],
        '金华':[119.64,29.12],
        '岳阳':[113.09,29.37],
        '长沙':[113,28.21],
        '衢州':[118.88,28.97],
        '廊坊':[116.7,39.53],
        '菏泽':[115.480656,35.23375],
        '合肥':[117.27,31.86],
        '武汉':[114.31,30.52],
        '大庆':[125.03,46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    myChart1.setOption(option = {
        title : {
            text: '全国数据请求量',
            subtext: 'Show Data',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        legend: {
            left: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#ccc'
            }
        },
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#0f2c70' // 0% 处的颜色
            }, {
                offset: 1, color: '#091732' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#091632',
                    borderColor: '#1773c3',
                    shadowColor: '#1773c3',
                    shadowBlur: 20
                }
            }
        },
        series: [
            {
                type: 'map',
                map: 'china',
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: true, // 存在legend时显示
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#0f2c70'
                    }
                },
                data:[
                    {name: '北京',value: 21300 }
                ]
            },
            {
                name: '城市',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 20;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: '前5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 20;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    });
    myChart1.setOption(option);
}
function cityTable(){
    var myChart = echarts.init(document.getElementById('city-table'));
    let yAxisMonth = ["" +

        "北京",
        "上海",
        "重庆",
        "河南",
        "安徽",
        "四川",
        "宁夏",
        "新疆",
        "西藏",
        "吉林",
        "辽宁",
        "黑龙江"
    ];
    let barData = [
        21,
        32,
        56,
        78,
        90,
        67,
        89,
        98,
        32,
        12,
        32,
        32
    ];
    let barDataTwo = [];
    let coordData2 = [];
    let coordData = [];
// let chartHeight;
    for (let i = 0; i < barData.length; i++) {
        barDataTwo.push(Math.max.apply(Math, barData) + 5000);
        coordData.push({
            "coord": [Number(barData[i]) - 1, i]
        });
        coordData2.push({
            "coord": [Math.max.apply(Math, barData) + 5000, i]
        })
    }
// chartHeight = barData.length * 53;
// $("#ParticipateUnits_Bar").css({
//     height: chartHeight
// });
// let dom = G3("ParticipateUnits_Bar");
// dom.myChart.resize();
    option = {
        backgroundColor: "#020e25",
        title: {
            text: ''
        },
        legend: null,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + "<br/>" + '参训人次: ' + params[0].value;
            }
        },
        grid: {
            containLabel: true,
            left: "25%",
            right: "15%",
            top: "10%",
            bottom:"10%",
        },
        yAxis: [{
            data: yAxisMonth,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#42a5c2',
                },
                formatter: function(value) {
                    return '{Sunny|' + value + '}';
                },
                rich: {
                    value: {
                        lineHeight: 30,
                    },
                    Sunny: {
                        // width: 70,
                        height: 35,
                        padding: [0, 10, 0, 10],
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAjCAYAAADsZeb8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNzQ2ODFCQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxNzQ2ODFDQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjE3NDY4MTlCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjE3NDY4MUFCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fNMa8AAABg0lEQVR42uzaMUvDQBgG4O+7pJS0ghVBOkknK06dAh38E126uji4iogtzlFBcNTi4urin3CoOHWytpM41aJYxTa2Te4sWgpWA2lufV8I4ULuOB747m44VkrRdIydXoa8bpGZC8Qxm5Sk74fG76D2+Bv/+UdF6BNuDA47N1K/+wTMI7itiAPnPoVobL87JMwSfzxWRadeE+2bJn8+9wj5Pywq5gRv10uR7FdJDpJm/aws3hovEAqXCSLJYZV7rddYzTkBy2wRP2ug65DfT44AL0ASAdHYowwZ8ZLZOD8FR9Ry9twiu0+jTeQea2DkcmZREJ27Gih0EI24LVrXTVBobizstnEO1EVEgAhEICJABCIQgYgAEYhABCICRCACEYhIWERlLSVAoYPo929len0FFDqISl7J1FoOFDqIpnWp5pbzMrW6CI6IiP4hPYxK+sDLbm6BQ2Nj8Y+tMhnx7jBX3gCJzhFHxPIqkV4Y2Ef7cj6L0p4huJ+oLSgqjJuy+jdlvwQYAN1TdkgsoTftAAAAAElFTkSuQmCC'
                        }


                    }
                }
            }
        },
            {
                data: yAxisMonth,
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
            },
        ],
        xAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }, {
            type: "value",
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }],
        series: [{
            z: 10,
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '民警',
            type: 'pictorialBar',
            data: barData,
            barCategoryGap: '80%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontSize: 12,
                        color: '#00ffff'
                    }
                }
            },
            symbolRepeat: false,
            symbolSize: ['100%', 33],
            symbolOffset: [-16.5, 0],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#083e6d',
                    },
                        {
                            offset: 0.5,
                            color: '#0272f2',
                            opacity: 0.7
                        }, {
                            offset: 1,
                            color: '#083e6d',
                            opacity: 0.5
                        }
                    ], false),
                }
            },
            symbolClip: true,
            symbolPosition: 'end',
            symbol: 'rect',
            // symbol: 'path://M0 0 L0 60 L225 60 L300 0 Z',
            markPoint: {
                data: coordData,
                symbolSize: [33, 33],
                symbolOffset: [-0.5, 0],
                z: 3,
                label: {
                    normal: {
                        show: false
                    }
                },
                symbolClip: true,
                symbol: 'path://M 300 100 L 100 100 L 100 300 z',

            }
        },
            {
                z: 6,
                xAxisIndex: 1,
                yAxisIndex: 1,
                animation: false,
                name: '民警',
                type: 'pictorialBar',
                data: barDataTwo,
                barCategoryGap: '80%',
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        textStyle: {
                            fontSize: 12,
                            color: '#00ffff'
                        }
                    }
                },
                symbolRepeat: false,
                symbolSize: ['100%', 33],
                symbolOffset: [-16.5, 0],
                itemStyle: {
                    normal: {
                        color: '#00abc5',
                        opacity: 0.085
                    }
                },
                symbolClip: true,
                symbol: 'rect',
                markPoint: {
                    data: coordData2,
                    symbolSize: [33, 33],
                    symbolOffset: [-0.5, 0],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00abc5',
                            opacity: 0.085
                        }
                    },
                    symbolClip: true,
                    symbol: 'path://M 300 100 L 100 100 L 100 300 z',
                    // animationDelay:100
                    // animationDuration:1200
                    // animation:false
                    // animationDurationUpdate :1000
                }
            },
        ]
    };
    myChart.setOption(option);

}
//  雷达图示讲解
function leiDa() {
    var myChart = echarts.init(document.getElementById('sys-leida'));
    // var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
    option = {
        backgroundColor: '#101736',
        color: ['#00c2ff', '#f9cf67', '#e92b77'],
        legend: {
            show: true,
            // icon: 'circle',//图例形状
            bottom: 45,
            center: 0,
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 14,
                color: '#ade3ff'
            },
            data: ['2016', '2017', '2018'],
        },
        radar: [{

            indicator: [{
                text: '科技创新联盟',
                max: 100
            },
                {
                    text: '科技成果转化中心',
                    max: 100
                },
                {
                    text: '工程技术中心（工程实验室）',
                    max: 100
                },
                {
                    text: '新型研发机构',
                    max: 100
                },
                {
                    text: '科技创孵化器',
                    max: 100
                }
            ],

            textStyle: {
                color: 'red'
            },
            center: ['50%', '50%'],
            radius: 142,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            // shape: 'circle',
            // backgroundColor: {
            //     image:imgPath[0]
            // },
            name: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [{
                name: '2016',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#cdd71e'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#cdd71e'
                            }],
                            globalCoord: false
                        },
                        opacity: 0 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: {                    // 单个拐点文本的样式设置
                    normal: {
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14,           // 文字的字体大小
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                },
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#00c2ff',
                        borderWidth: 2.5
                    }
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
            }, {
                name: '2017',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#cdd71e',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#f9cf67'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#f9cf67'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
            }, {
                name: '2018',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#e92b77',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#e92b77'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#e92b77'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }]
        }, ]
    };
    myChart.setOption(option);
}


function sysBing() {
    var myChart = echarts.init(document.getElementById('sys-bing'));
    // app.title = '嵌套环形图';

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
        },
        series: [
            {
                name:'',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'', selected:true},
                    {value:679, name:''},
                    {value:1548, name:''}
                ]
            },
            {
                name:'',
                type:'pie',
                radius: ['40%', '55%'],
                // label: {
                //     normal: {
                //         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                //         backgroundColor: '#eee',
                //         borderColor: '#aaa',
                //         borderWidth: 1,
                //         borderRadius: 4,
                //         shadowBlur:3,
                //         shadowOffsetX: 2,
                //         shadowOffsetY: 2,
                //         shadowColor: '#999',
                //         padding: [0, 7],
                //         rich: {
                //             a: {
                //                 color: '#999',
                //                 lineHeight: 22,
                //                 align: 'center'
                //             },
                //             // abg: {
                //             //     backgroundColor: '#333',
                //             //     width: '100%',
                //             //     align: 'right',
                //             //     height: 22,
                //             //     borderRadius: [4, 4, 0, 0]
                //             // },
                //             hr: {
                //                 borderColor: '#041839',
                //                 width: '100%',
                //                 borderWidth: 0.5,
                //                 height: 0
                //             },
                //             // b: {
                //             //     fontSize: 16,
                //             //     lineHeight: 33
                //             // },
                //             // per: {
                //             //     color: '#eee',
                //             //     backgroundColor: '#334455',
                //             //     padding: [2, 4],
                //             //     borderRadius: 2
                //             // }
                //         }
                //     }
                // },
                data:[
                    {value:335, name:'直达'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1048, name:'百度'},
                    {value:251, name:'谷歌'},
                    {value:147, name:'必应'},
                    {value:102, name:'其他'}
                ]
            }
        ]
    };
    myChart.setOption(option);

    
}
function sysYibiao(){
    var myChart = echarts.init(document.getElementById('sys-yibiao'));
    option = {
        backgroundColor: '#021637',
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'',
                type:'gauge',
                min:0,
                max:220,
                splitNumber:11,
                radius: '50%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                        width: 3,
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#077284',
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#077284',
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#077284', //默认透明
                    shadowBlur: 5
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#077284',
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    backgroundColor: '#077284',
                    borderWidth: 1,
                    borderColor: '#077284',
                    shadowColor : '#077284', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#077284'
                    }
                },
                data:[{value: 34.56, name: ''}]
            },
            {
                name:'',
                type:'gauge',
                center : ['25%', '55%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    //backgroundColor: 'rgba(30,144,255,0.8)',
                    // borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height:30,
                    offsetCenter: [25, '20%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff'
                    }
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
            },
            {
                name:'油表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:2,
                startAngle:135,
                endAngle:45,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            },
            {
                name:'',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:2,
                startAngle:315,
                endAngle:225,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#077284',
                        shadowColor : '#077284', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return '';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            }
        ]
    };

    setInterval(function (){
        option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
        option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
        option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
        myChart.setOption(option);
    },2000)

    myChart.setOption(option);

}
//面积趋势图
function mianji() {
    var myChart = echarts.init(document.getElementById('mianji'));
    var xData = function() {
        var data = [];
        for (var i = 2011; i < 2017; i++) {
            data.push(i + "");
        }
        return data;
    }();
    var color = ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', ]
    var name = ['', '', '', '', '', '']
    var data = [
        [5.5,5,8,1,6,5.2,3.4, 13.5, 16.1, 7.4, 15.2],


        [3.5,12.5,5,6,4.5, 13.5, 3.7, 17.4, 15.2, 18.9],

    ]

    var series = [];
    for (var i = 0; i < 6; i++) {
        series.push({
            name: name[i],
            type: "line",
            symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
            symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            smooth: true, //是否平滑曲线显示
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[i]
                    }, {
                        offset: 0.8,
                        color: 'rgba(255,255,255,0)'
                    }], false),
                    // shadowColor: 'rgba(255,255,255, 0.1)',
                    shadowBlur: 10,
                    opacity:0.3,
                }
            },
            itemStyle: {
                normal: {
                    color: color[i],
                    lineStyle: {
                        width: 1,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    },
                    borderColor: color[i], //图形的描边颜色。支持的格式同 color
                    borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
                    barBorderRadius: 0,
                    label: {
                        show: false,
                    },
                    opacity:0.5,
                }
            },
            data: data[i],

        })
    }
    option = {
        backgroundColor: "#021637",
        legend: {
            top: 20,
            itemGap:5,
            itemWidth:5,
            textStyle: {
                color: '#fff',
                fontSize: '10'
            },
            data: name
        },
        title: {
            text: "",
            textStyle: {
                color: '#fff',
                fontSize: '22',
                fontWeight: 'normal',
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: {
                    color: '#57617B'
                }
            },
            formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
        grid: {
            borderWidth: 0,
            top: 110,
            bottom: 95,
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: "category",
            axisLine: {
                lineStyle: {
                    color: '#32346c'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#32346c ',
                }
            },
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data: xData,
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#32346c ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}%',
            },
        },
        series: series,
    }
    myChart.setOption(option);

}
//横向
function hengxiang() {
    var myChart = echarts.init(document.getElementById('hengxiang'));
    // app.title = '堆叠条形图';

    option = {
        backgroundColor: '#021637',
        legend: {
            bottom: 20,
            textStyle:{
                color:'#fff',
            },
            data: ['', '']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show:"true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis:  {
            type: 'value',
            axisTick : {show: false},
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [
            {
                type: 'category',
                axisTick : {show: false},
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: ['2314525445','124541485','14245457','2421542','124424','12454','7548','154','21']
            },
            {
                type: 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
            },

        ],
        series: [
            {
                name: '',
                type: 'bar',
                yAxisIndex:1,

                itemStyle:{
                    normal: {
                        show: true,
                        color: '#277ace',
                        barBorderRadius:20,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                barGap:'0%',
                barCategoryGap:'50%',
                data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
            },
            {
                name: '',
                type: 'bar',
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#5de3e1',
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                barGap:'0%',
                barCategoryGap:'50%',
                data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
            }

        ]
    };
    myChart.setOption(option);
}
//柱线
function zhuXian() {
    var myChart = echarts.init(document.getElementById('zhuxian'));
    var colors = ['#5793f3', '#d14a61', '#675bba'];

    option = {
        color: colors,

        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'cross'}
        },
        grid: {
            right: '20%'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['蒸发量','降水量','平均温度']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '蒸发量',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '降水量',
                min: 0,
                max: 250,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'降水量',
                type:'bar',
                yAxisIndex: 1,
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均温度',
                type:'line',
                yAxisIndex: 2,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    myChart.setOption(option);
}
