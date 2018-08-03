import React from 'react'
import { Provider } from 'mobx-react'
import GroupList from './GroupList'
import AddGroup from './AddGroup'

import Chatroom from './Chatroom'

import GroupStore from '../stores/groupStore'

const groupStore = new GroupStore()

export default (props) => (
  <Provider groupStore={groupStore}>
    <div>
    Hi
<GroupList/>
<AddGroup/>
<Chatroom />
</div>
</Provider>
)
