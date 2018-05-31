// Dependencies
import React, { Component } from 'react';

// Assets
import './Content.css';

class Content extends Component {
  render() {
    const { body } = this.props;

    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;
