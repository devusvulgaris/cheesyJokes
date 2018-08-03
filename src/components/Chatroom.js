import React, { Component } from 'react'
import io from 'socket.io-client'
import AddJoke from './AddJoke'

const socket = io('http://localhost:3000')

class Chatroom extends Component {

state = {
  mesage: ''
}

  componentWillMount() {
   
    socket.on('connect', () => {
      console.log(`Connected, id: ${socket.id}`)
    });

    socket.on('message', (data) => {
      this.setState({message: data})
    })
  }

  render() {
    return(
      <div>
      Here be room: {this.state.message}
      <AddJoke socket={socket} />
      </div>
    )
  }

}

export default Chatroom
