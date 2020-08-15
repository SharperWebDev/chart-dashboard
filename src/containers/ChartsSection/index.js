import React, { Component } from 'react';
import HightCharts from 'highcharts';
import ReactChart from 'highcharts-react-official';

class ChartsSection extends Component {

render () {
  const schoolData = {
    "total": 100000,
    "school_types": {
      "grammar": 11978,
      "private": 22914,
      "state": 57458,
      "international": 7650
    }
  };

  const series = [{colorByPoint: true, data:
    Object.keys(schoolData.school_types).map(type => {
      const typeString = `${type[0].toUpperCase()}${type.slice(1)} (${(schoolData.school_types[type]/schoolData.total*100).toFixed(1)}% - ${schoolData.school_types[type]})`,
      schoolTypes = {name : typeString, "y": schoolData.school_types[type]};
      return(schoolTypes)})
    }],
    options = {
      chart: {
        type: "pie",
        style: {
          fontfamily: 'Montserrat-Bold'
        }
      }, 
      title: {
        text: 'School Type'
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
            showInLegend: true,
        }
    },
    legend: {
        enabled: true,
        floating: true,
        layout: 'vertical',
        align: 'left',
        alignColumns: false,
        verticalAlign: 'bottom',
        adjustChartSize: true
    },
      series: series,
      tooltip: {
        enabled: false
      }
    };

    return (
      <>
        <article className="graph-card">
          <div className="filter-tab"></div>
          <div className="chart">
            <ReactChart
              hightCharts={HightCharts}
              options={options}
            />
          </div>
        </article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
        <article className="graph-card">graph card</article>
      </>
    )
  }
}

export default ChartsSection;