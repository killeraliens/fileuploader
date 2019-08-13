import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';


class SearchBox extends React.Component {

  handleChange = (e) => {
    this.props.onTermChange(e.target.value);
  }

  render() {
    return (
      <div className="SearchBox">
       <FontAwesomeIcon icon={faSearch}/>
       <input type="text" placeholder="Search Term" value={this.props.searchTerm} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchBox;
