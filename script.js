google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Halo Series', 'Sales'],
        ['Halo Ce', 6430000],
        ['Halo 2', 125000000],
        ['Halo 3', 170000000],
        ['Halo Reach', 200000000],
        ['Halo 4', 220000000]
    ]);

    var options = {
        title: 'Halo Series Sales on Launch Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Number of Sales',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 9,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Halo Series',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}