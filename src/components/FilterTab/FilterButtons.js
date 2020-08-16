import React, { Component } from 'react';
import { connect } from 'react-redux';
import chartData from '../../data/chartData.json';

class FilterButtons extends Component {
    render(){
        return (
            <div className="filter-tab-filter">
                <h2 className="h2">Filter:</h2>
                <button className="filter-button" onClick={this.props.loadAllSchoolData}>All</button>
                <button className="filter-button" onClick={this.props.loadFemaleSchoolData}>Female</button> 
                <button className="filter-button" onClick={this.props.loadMaleSchoolData}>Male</button>
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