import React, {  Component } from 'react'

export default class Comment extends Component{
  render(){
    return(
      <div style={{marginBottom:16}}>
        <p style={{fontSize:20, fontWeight:400}}>
          {this.props.comment.body}
        </p>

        {this.props.comment.username}
        <span style={{marginLeft:12, marginRight:12}}>|</span>
        {this.props.comment.timestamp} <hr/>
      </div>
    )
  }
}
