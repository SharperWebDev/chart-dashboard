import React from 'react';

const FilterList = (props) => {
  return (
    <section className="filter">
      <ul id="filterList" className="filter-list">
        <li className="filter-list-item">
          <div className="filter-list-item-primary">
            <div className="filter-list-item-primary-icon">icon</div>
            <p>text</p>
            <div className="filter-list-item-primary-action-icon">V</div>
          </div>
        </li>
        <li className="filter-list-item">
          <div className="filter-list-item-primary">
            <div className="filter-list-item-primary-icon">icon</div>
            <p>text</p>
            <div className="filter-list-item-primary-action-icon">V</div>
          </div>
        </li>
        <li className="filter-list-item">
          <div className="filter-list-item-primary">
            <div className="filter-list-item-primary-icon">icon</div>
            <p>text</p>
            <div className="filter-list-item-primary-action-icon">V</div>
          </div>
          <ul className="filter-list-item-secondary">
            <li className="filter-sub-list-item">
              <input type="checkbox" id="one" name="one"/>
              <label for="one">one</label>
            </li>
            <li className="filter-sub-list-item">
              <input type="checkbox" id="two" name="two"/>
              <label for="two">two</label>
            </li>
            <li className="filter-sub-list-item">
              <input type="checkbox" id="three" name="three"/>
              <label for="three">three</label>
            </li>
            <li className="filter-sub-list-item">
              <input type="checkbox" id="four" name="four"/>
              <label for="four">four</label>
            </li>
            <li className="filter-sub-list-item">
              <input type="checkbox" id="five" name="five"/>
              <label for="five">five</label>
            </li>
          </ul>
        </li>
        <li className="filter-list-item">
          <div className="filter-list-item-primary">
            <div className="filter-list-item-primary-icon">icon</div>
            <p>text</p>
            <div className="filter-list-item-primary-action-icon">V</div>
          </div>
        </li>
        <li className="filter-list-item">
          <div className="filter-list-item-primary">
            <div className="filter-list-item-primary-icon">icon</div>
            <p>text</p>
            <div className="filter-list-item-primary-action-icon">V</div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default FilterList;