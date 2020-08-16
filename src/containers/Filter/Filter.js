import React, {Component} from 'react';
import filterData from '../../data/filterData.json';
import FilterHeader from '../../components/FilterHeader/FilterHeader';
import FilterList from '../../components/FilterList/FilterList';

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