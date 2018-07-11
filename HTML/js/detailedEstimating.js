$(document).ready(function () {
    $('#hardware-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Hardware Sets'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                },
                showInLegend: true
            }
        },
        series: [{
                name: 'Hardwares',
                colorByPoint: true,
                data: [{
                        name: 'Set Type 1',
                        y: 5
                    }, {
                        name: 'Set Type 2',
                        y: 4,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Set Type 3',
                        y: 2
                    }]
            }],
        colors: ['#FFDF78', '#3ACB77',
            '#23BCDE', '#23BCDE']
    });
    $('#typelist-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Type & Lists'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                },
                showInLegend: true
            }
        },
        series: [{
                name: 'Types',
                colorByPoint: true,
                data: [{
                        name: 'Lists',
                        y: 4,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Frame Types',
                        y: 5,
                    }, {
                        name: 'Door Types',
                        y: 3
                    },
                    {
                        name: 'Grouped Opening Types',
                        y: 1
                    }]
            }],
        colors: ['#F7A35C','#23BCDE', '#FFDF78',
            '#53BA9C', '#23BCDE']
    });
    $('#details-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Material'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                },
                showInLegend: true
            }
        },
        series: [{
                name: 'Openings',
                colorByPoint: true,
                data: [{
                        name: 'Opening 1',
                        y: 5
                    }, {
                        name: 'Opening 2',
                        y: 4,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Opening 3',
                        y: 2
                    }]
            }],
        colors: ['#7CB5EC', '#3FBD73',
            '#FFDF78', '#A47D7C', '#B5CA92']
    });
    $('#costsummary-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Cost & Quotes'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>${point.y:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                },
                showInLegend: true
            }
        },
        series: [{
                name: 'Costs',
                colorByPoint: true,
                data: [{
                        name: 'Material',
                        y: 10000
                    }, {
                        name: 'Hardware',
                        y: 15000,
                        sliced: true,
                        selected: true
                    }]
            }],
        colors: ['#53BA9C', '#FFDF78',
            '#92A8CD', '#A47D7C', '#B5CA92']
    });
	
});