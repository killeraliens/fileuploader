import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar_heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar_controls">
          <SearchBox searchTerm={this.props.searchTerm} onTermChange={this.props.onTermChange}/>
          <FilterOptions filterOption={this.props.filterOption} onFilterOptionSelect={this.props.onFilterOptionSelect}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
