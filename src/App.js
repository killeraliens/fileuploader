import React from 'react';
import FilterableList from './FilterableList/FilterableList';
import SearchBar from './SearchBar/SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      filterOption: 'All'
    }
  }

  handleTermChange = (term) => {
    // console.log('term is changed', {term})
    this.setState({searchTerm: term});
  }

  handleFilterOptionSelect = (checkedValue) => {
    //console.log(checkedValue);
    this.setState({filterOption: checkedValue})
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          onTermChange={this.handleTermChange}
          onFilterOptionSelect={this.handleFilterOptionSelect}
        />
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;
