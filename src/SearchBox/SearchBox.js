import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';


class SearchBox extends React.Component {
  render() {
    return (
      <div className="SearchBox">
       <FontAwesomeIcon icon={faSearch}/>
       <input type="text" placeholder="Search Term"/>
      </div>
    )
  }
}

export default SearchBox;
