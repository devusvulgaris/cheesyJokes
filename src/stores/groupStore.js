import { configure, observable, runInAction, action } from 'mobx'

configure({enforceActions: true})
const GROUP_ENDPOINT = 'http://localhost:3000'

class GroupStore {

  @observable groups = []
  @observable isLoading = false
  @observable message = null
  @observable error = null

  wait = ms => new Promise(resolve => setTimeout(resolve, ms))

  @action
  loadGroups = async () => {
    this.isLoading = true

    try {
      const fetchedGroups = await fetch('http://localhost:3000')
      await this.wait(1000)
      const data = await fetchedGroups.json()
      runInAction(() => {
        this.isLoading = false
        this.groups = data.groups
      })
    } catch (err) {
      runInAction(() => {
        this.isLoading = false
        this.error = err
      })
    }

  }

  addGroup = async(group) => {
    try {
      await fetch(GROUP_ENDPOINT, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({groupName: group})
      })
      runInAction(() => {
        this.message = 'Group added'
        this.groups = [...this.groups, group]
      })
    } catch (err) {
      runInAction(() => {
        this.error = err
      })
    }
  }

}

export default GroupStore
