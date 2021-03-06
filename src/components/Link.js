import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

class Link extends Component {
  render() {
    console.log(this.props.link)
    
    return (
      <div>
        <div>{this.props.link.description} ({this.props.link.url})</div>
      </div>
    )
  }
  
  _voteForLink = async () => {
      
  }

}

export default createFragmentContainer(Link, graphql`
    fragment Link_link on Link {
        id,
        description,
        url
    }
`)