import React, { Component, PropTypes } from 'react';
import CommentForm from 'components/CommentForm';
import CommentList from 'components/CommentList';

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentForm />
        <CommentList />
      </div>
    )
  }
}

module.exports = Comments;
