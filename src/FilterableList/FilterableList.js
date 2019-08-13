import React from 'react';
import ListItem from '../ListItem/ListItem';

class FilterableList extends React.Component {

  render() {
    const listItems = this.props.files.map((file, i) => <ListItem {...file} key={i} />)
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
