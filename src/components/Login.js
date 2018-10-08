import React, {Component} from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import {TiArrowRight} from 'react-icons/ti/index'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleLogin = (id) => {
    this.props.dispatch(setAuthedUser(id));
  }
  
  render () {
    return (
      <div>
        <h3 className='center'>Would You Rather</h3>
        <h5 className='center'>Please Signin to continue</h5>
        <ul className='users-list'>
          {this.props.userIds.map((id) => (
            <li key={id}>
              <div className='user' onClick={() => this.handleLogin(id)}>
                <Users id={id} />
                <div className='arrow'>
                  <TiArrowRight />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)