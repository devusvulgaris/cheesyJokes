import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('groupStore')
@observer
class GroupList extends Component {
  componentDidMount() {
    this.props.groupStore.loadGroups()
  }

  render() {
    const { groups, isLoading, error } = this.props.groupStore

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading..</p>
    }
    return(
      <div>
      <h3>List of groups</h3>

      {
        groups.map((group, i) => (<li key={i}>{group}</li>))}

      <input name='group'/>
      <button>Search</button>
      </div>
    )
  }
}

export default GroupList
