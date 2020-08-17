import ChartColors from '../../data/chartColors'

const chartOptions = (series) => {
  return ({
    chart: {
      type: "pie",
      marginTop: -100
    },
    colors: ChartColors,
    title: {
      text: 'School Type',
      align: 'left'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: '-30%',
          color: 'black',
          borderWidth: 0,
          format: '{point.percentage:.1f} %',
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
      y: 10,
      itemMarginBottom: 10,
    },
    series: series,
    tooltip: {
      enabled: false
    }
  })
}

export default chartOptions;