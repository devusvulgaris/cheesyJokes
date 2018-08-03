import React, { Component } from 'react'
import { inject } from 'mobx-react'


@inject('groupStore')
class AddJoke extends Component {

  state = {
    jokeText: '',
    isTyping: false
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })
    this.props.socket.emit('typing', )

    this.props.socket.emit('message', this.state)
  }

  handleCreate() {
    //this.props.groupStore.addGroup(this.state.jokeText)
console.log(this.state.jokeText)
  }

  render() {
    return(
      <div>
        <h3>Add joke</h3>

        <textarea name='jokeText' value={this.state.jokeText} onChange={this.handleChange}/>
        <button onClick={() => {this.handleCreate.call(this)}}>Add joke</button>
      </div>
    )
  }
}

export default AddJoke
