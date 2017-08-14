import React, { Component } from 'react';

class GitItem extends Component {

  render() {
    return (
      <tr>
        <td>
          <img src={this.prop.item.owner.avatar_url} alt={this.prop.item.full_name} width="25" height="25" />
        </td>
        <td>
          {this.prop.item.full_name}
        </td>
        <td>
          {this.prop.item.stargazers_count}
        </td>
        <td>
          {this.prop.item.language}
        </td>
       </tr>
    );
  }
}

export default GitItem;
