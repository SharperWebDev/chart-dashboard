import React, { Component } from 'react';
import { connect } from 'react-redux';
import chartData from '../../data/chartData.json';

class FilterButtons extends Component {
    render(){
        return (
            <div className="filter-tab-filter">
                <h2 className="h2">Filter School type by:</h2>
                <button className="filter-button" onClick={this.props.loadFemaleSchoolData}>
                    <div className="female"></div>Female
                </button> 
                <button className="filter-button" onClick={this.props.loadMaleSchoolData}>
                    <div className="male"></div>Male
                </button>
                <div className="divider"></div>
                <button className="reset" onClick={this.props.loadAllSchoolData}>Reset</button>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
      loadAllSchoolData: () => dispatch({type: 'ALL_SCHOOL_DATA', payload: chartData.all}),
      loadMaleSchoolData: () => dispatch({type: 'MALE_SCHOOL_DATA', payload: chartData.male}),
      loadFemaleSchoolData: () => dispatch({type: 'FEMALE_SCHOOL_DATA', payload: chartData.female})
    }
  };

  export default connect(null, mapDispatchToProps)(FilterButtons);