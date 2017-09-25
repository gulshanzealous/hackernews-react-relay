import React, { Component } from 'react'
import CreateLink from './CreateLink'
import LinkListPage from './LinkListPage'


class App extends Component {
  render() {
    return (
      <div>
        <CreateLink />
        <br />
        <br />
        <br />
        <LinkListPage />
      </div>
    )
  }
}

export default App