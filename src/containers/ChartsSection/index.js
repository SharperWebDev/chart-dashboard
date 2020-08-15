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

  const series = {"series" : [{"name": "bob", "colorByPoint": true, "data":[
        Object.keys(schoolData.school_types).map(type => {const schoolTypes = {"name" : type, "y": schoolData.school_types[type]};
        return(schoolTypes)})
      ]}
    ]};


  console.log('constructed schooltypes', JSON.stringify(series));

  const options ={
    chart: {
      type: "pie"
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  };
 // school_types = [Object.assign(options.school_types)];

  //console.log('school types', school_types );

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