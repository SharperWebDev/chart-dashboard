import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HightCharts from 'highcharts';
import ReactChart from 'highcharts-react-official';
import chartOptions from './ChartOptions';


class Chart extends Component {
  render() {
      const { chartData } = this.props;
      console.log( 'CHARTDATA>>>>>>>', chartData );
      const series = [{colorByPoint: true, data:
        Object.keys(chartData.school_types).map((type, i) => {
          const legendString = `${type[0].toUpperCase()}${type.slice(1)} (${(chartData.school_types[type]/chartData.total*100).toFixed(1)}% - ${chartData.school_types[type]})`,
          schoolTypes = {name : legendString, "y": chartData.school_types[type]};
          return(schoolTypes)})
        }],
        options = chartOptions(series) ;

    return (
      <div className="chart">
        <ReactChart hightCharts={HightCharts} options={options} />
      </div>
    )
  }
}

Chart.propTypes = {
    chartData: PropTypes.object
  }

export default Chart;