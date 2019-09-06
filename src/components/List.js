import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div> 
        {!this.props.images && 'Loading'}
        {this.props.images && this.props.images.map(image => {
          return <div>
            <h3>{image.title}</h3>
            <img src={image.url} />
          </div>
        })}
      </div>
    )
  }
}