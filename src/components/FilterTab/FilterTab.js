import React, {Component} from 'react';
import FilterButtons from './FilterButtons';

class FilterTab extends Component {
state = {
    open: false,
}

tabToggle(){
    const openStatus = this.state.open;
    this.setState( { open: openStatus ? false : true } );
}

  render() {
    return (
      <aside className={`filter-tab ${this.state.open ? "filter-tab--open" : "filter-tab--closed"}`} >
        <FilterButtons />
        <button className="filter-tab-button" onClick={() => this.tabToggle()}></button>
      </aside>
    )
  }
};

export default FilterTab;