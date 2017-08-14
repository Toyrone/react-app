import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import GitItem from './GitItem';

class GitList extends Component {

  componentDidMount() {
    console.log(this.props.items);
    let dateFrom = (new Date()).toISOString().slice(0, 10);

    this.props.fetchData(`https://api.github.com/search/repositories?q=created:>=` + dateFrom + `&sort=stars&order=desc&per_page=10`)
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was error loading the data</p>
    }

    if (this.props.isLoading) {
      return   <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader" />
    }

    return (
      <div>
        <table className="table table-hover">
    			<thead>
    				<tr>
    					<th>Avatar</th>
              <th>Full Name</th>
              <th>Stars</th>
              <th>Language</th>
    				</tr>
    			</thead>
    			<tbody>
            { this.props.items.map((item) => {
              return <GitItem key={item.id} item={item} />
            })
            }
            <tr>
    					<td></td>
    				</tr>
    			</tbody>
    		</table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
