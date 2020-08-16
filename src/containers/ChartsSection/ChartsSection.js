import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart/Chart';
import FilterTab from '../../components/FilterTab/FilterTab'

class ChartsSection extends Component {
render () {
    return (
      <>
        <article className="graph-card">
          <FilterTab />
          <Chart chartData={this.props.chartData} />
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

const mapStateToProps = state => {
  return {
      chartData: state.chartData
  };
};



export default connect(mapStateToProps)(ChartsSection);