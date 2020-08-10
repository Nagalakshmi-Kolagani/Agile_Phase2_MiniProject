anychart.onDocumentReady(function () {
    var chart = anychart.column();

    chart.animation(true);

    chart.title('Sales By Month for');

    var series = chart.column([
        ['January', '0'],
        ['February', '0'],
        ['March', '0'],
        ['April', '0']
    ]);

    chart.yScale().minimum(0);

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    chart.xAxis().title('Months');
    chart.yAxis().title('Sales');

    chart.container('container');

    chart.draw();
});
anychart.onDocumentReady(function () {
    var chart = anychart.column();

    chart.animation(true);

    chart.title('Sales By Month for');

    var series = chart.column([
        ['January', '0'],
        ['February', '0'],
        ['March', '0'],
        ['April', '0']
    ]);

    chart.yScale().minimum(0);

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    chart.xAxis().title('Months');
    chart.yAxis().title('Sales');

    chart.container('container');

    chart.draw();
});