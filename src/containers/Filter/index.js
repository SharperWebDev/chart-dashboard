import React, {Component} from 'react';
import FilterHeader from '../../components/FilterHeader';
import FilterList from '../../components/FilterList';

class Filter extends Component {
  render() {
    return (
      <aside className="filter-area">
        <FilterHeader/>
        <FilterList /* pass filter data props here *//>
      </ aside>
    )
  }
}

export default Filter;