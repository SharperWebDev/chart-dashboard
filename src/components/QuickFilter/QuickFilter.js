import React, { Component } from 'react';
import { connect } from 'react-redux';
import { all } from '../../data/chartData.json'

class QuickFilter extends Component {
    render() {
        const currentTotal = this.props.chartData.total;
        const fillHeight = {"height":`${currentTotal/all.total*100}%`};

        return (
            <aside className="quick-filter-bar">
                <div className="student-percentage">
                    <div className="student-percentage-fill" style={fillHeight}></div>
                </div>
                <div className="student-percentage-text">
                    <p className="figure">{currentTotal}</p>
                    <p className="label">members selected</p>
                </div>
            </aside>
        )
    }
}

const mapStateToProps = state => {
    return {
        chartData: state.chartData
    };
  };

export default connect(mapStateToProps)(QuickFilter);