import ChartColors from '../../data/chartColors'

const chartOptions = (series) => {
  return ({
    chart: {
      type: "pie",
      marginTop: -100
    },
    colors: ChartColors,
    title: {
      text: 'School Type'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        size: 167
      },
      point: {
        events: {
          legendItemClick: function () {
            return false;
          }
        }
      }
    },
    legend: {
      enabled: true,
      floating: true,
      layout: 'vertical',
      align: 'left',
      alignColumns: false,
      verticalAlign: 'bottom',
      adjustChartSize: true,
      y: 10
    },
    series: series,
    tooltip: {
      enabled: false
    }
  })
}

export default chartOptions;