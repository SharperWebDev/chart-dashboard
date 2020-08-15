import React, {Component} from 'react';

class FilterList extends Component {
  render() {
    const {filterData} = this.props;
    const filterNames = Object
      .keys(filterData)
      .map(name => {
        return name;
      });

    return (
      <section className="filter">
        <ul id="filterList" className="filter-list">
          {filterNames.map(name => {
            return (
              <li className="filter-list-item">
                <div className="filter-list-item-primary">
                  <div className="filter-list-item-primary-icon">icon</div>
                  <p>{name}</p>
                  <div className="filter-list-item-primary-action-icon">V</div>
                </div>

                {filterData[name].sectors && Object
                  .keys(filterData[name].sectors)
                  .map(sector => {
                    return (
                      <ul className="filter-list-item-secondary">
                        <li className="filter-sub-list-item">
                          <input type="checkbox" id={sector} name={sector}/>
                          <label htmlFor={sector}>{sector}</label>
                        </li>
                      </ul>
                    )
                  })
}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default FilterList;