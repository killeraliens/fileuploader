import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component {
  handleChange = (e) => {
    this.props.onFilterOptionSelect(e.target.value)
  }

  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions_option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption === 'All'}
              onChange={this.handleChange}
            />
            All
          </label>
        </div>
        <div className="FilterOptions_option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
              checked={filterOption === 'Uploaded'}
              onChange={this.handleChange}
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions_option">
          <label htmlFor="filter_synced">
            <input
              type="radio"
              value="Synced"
              id="filter_synced"
              name="filter"
              checked={filterOption === 'Synced'}
              onChange={this.handleChange}
            />
            Synced
          </label>
        </div>
        <div className="FilterOptions_option">
          <label htmlFor="filter_new">
            <input
              type="radio"
              value="New"
              id="filter_new"
              name="filter"
              checked={filterOption === 'New'}
              onChange={this.handleChange}
            />
            New
          </label>
        </div>
      </div>
    )
  }
}

export default FilterOptions;
