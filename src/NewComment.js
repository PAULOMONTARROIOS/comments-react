import React, { Component } from 'react';

class NewComment extends Component {

  state = {
    newComment: ''
  }

  handleChange = (event) => {

    const { name, value } = event.target

    this.setState({
      newComment: event.target.value
    });
    
  }

  sendComment = () => {
    this.props.sendComment(this.state.newComment);
    this.setState({newComment: ''});
  }

  render() {
    return (
      <div>
        <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
        <button onClick={this.sendComment}>Enviar</button>
      </div>
    );
  }
}

export default NewComment;