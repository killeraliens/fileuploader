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
          <SearchBox />
          <FilterOptions />
        </div>
      </div>
    )
  }
}

export default SearchBar;
