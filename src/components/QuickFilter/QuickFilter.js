import React, { Component } from 'react';
import { connect } from 'react-redux';
import { all } from '../../data/chartData.json'

class QuickFilter extends Component {
    render() {
        const fillHeight = {"height":`${this.props.chartData.total/all.total*100}%`};

        return (
            <aside className="quick-filter-bar">
                <div className="student-percentage">
                    <div className="fill" style={fillHeight}></div>
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