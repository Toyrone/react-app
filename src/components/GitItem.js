import React, { Component } from 'react';


class GitItem extends Component {

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.item.owner.avatar_url} alt={this.props.item.full_name} width="25" height="25" />
        </td>
        <td>
          {this.props.item.full_name}
        </td>
        <td>
          {this.props.item.stargazers_count}
        </td>
        <td>
          {this.props.item.language}
        </td>
       </tr>
    );
  }
}

export default GitItem;
