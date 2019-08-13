import React from 'react';
import ListItem from '../ListItem/ListItem';

class FilterableList extends React.Component {

  render() {
    const { searchTerm, filterOption } = this.props;
    const listItems = this.props.files
      .filter(file =>
         file.name.includes(searchTerm) && (file.status === filterOption || filterOption === 'All')
      ).map((file, i) =>
         <ListItem {...file} key={i} />
      );
    return(
      <div className="FilterableList">
        {listItems}
      </div>
    )
  }
}

FilterableList.defaultProps = {
  files: []
}

export default FilterableList;
