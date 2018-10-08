import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'


class Users extends Component {
  render () {
    const {user} = this.props
    
    const {id, name, avatarURL} = user
    
    return (
      <Link to={`/${id}`}>
        <img 
          className = 'avatar'
          src = {avatarURL}
          alt = {`Avatar of ${name}`}
        />
        <div className = 'user-info'>
          <div>
            <span>{name}</span>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({users}, {id}) {
  const user = users[id]
  
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(Users))