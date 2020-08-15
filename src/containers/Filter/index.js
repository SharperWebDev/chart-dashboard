import React, {Component} from 'react';
import filterData from '../../data/filterData.json';
import FilterHeader from '../../components/FilterHeader';
import FilterList from '../../components/FilterList';

class Filter extends Component {
  render() {
    return (
      <aside className="filter-area">
        <FilterHeader/>
        <FilterList filterData={filterData} />
      </ aside>
    )
  }
}

export default Filter;