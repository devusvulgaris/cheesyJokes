import React, { Component } from 'react'
import { inject } from 'mobx-react'

@inject('groupStore')
class AddGroup extends Component {

  state = {
    groupName: ''
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleCreate() {
    this.props.groupStore.addGroup(this.state.groupName)
  }

  render() {
    return(
      <div>
        <h3>Create group</h3>

        <input name='groupName' value={this.state.groupName} onChange={this.handleChange}/>
        <button onClick={() => {this.handleCreate.call(this)}}>Create</button>
      </div>
    )
  }
}

export default AddGroup
