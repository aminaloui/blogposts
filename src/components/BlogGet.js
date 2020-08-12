import React from 'react';
import BlogGetChild from './BlogGetChild';

export default class BlogGet extends React.Component {
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  }

  render() {
    return (
      <>
        <BlogGetChild />
      </>



    )
  }
}
