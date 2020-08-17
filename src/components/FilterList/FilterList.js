import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FilterList extends Component {
  render() {
    const {filterData} = this.props;
    const filterNames = Object.keys(filterData).map(name => {
        return name;
      });

    return (
      <section className="filter">
        <ul id="filterList" className="filter-list">
          {filterNames.map((name, i) => {
            return (
              <li key={i.toString()} className="filter-list-item">
                <div className="filter-list-item-primary">
                  <div className={`filter-list-item-primary-icon filter-list-item-primary-icon-${filterData[name].icon}`}></div>
                  <p>{name}</p>
                  <div className="filter-list-item-primary-action-icon"></div>
                </div>

                {filterData[name].sectors && 
                  <div className="secondary-container">
                    <p className="secondary-title">Sectors</p>
                    <ul className="filter-list-item-secondary">
                      { Object.keys(filterData[name].sectors).map(sector => {
                        return (
                          <li key={`${name + sector}`}className="secondary-list-item">
                            <input type="checkbox" id={sector} name={sector}/>
                            <label className="secondary-label" htmlFor={sector}>{sector}</label>
                          </li>
                          )}
                        )
                      }
                    </ul>
                  </div>
                }
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

FilterList.propTypes = {
  filterData: PropTypes.object
}
export default FilterList;