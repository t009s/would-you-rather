import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navmain extends Component {
  state = {
    activeTab: 'Home'
  }

  handleActiveTab = (activeTab) => {
    this.setState(() => ({
      activeTab
    }))
  }

  handleLogout = (e) => {
    this.props.dispatch(setAuthedUser(null))
  }
  
  render () {
    const { authedUser, users } = this.props
    const { activeTab } = this.state
    
    return (
      <nav className='nav'>
        <ul id='horizontal'>
          <li className={activeTab === 'home' ? 'active-tab' : ' '}>
            <Link to='/' onClick={() => this.handleActiveTab('home')}>
              Home
            </Link>
          </li>
          <li className={activeTab === 'add' ? 'active-tab' : ' '}>
            <Link to='/add' onClick={() => this.handleActiveTab('add')}>
              New Question
            </Link>
          </li>
          <li className={activeTab === 'leaderboard' ? 'active-tab' : ' '}>
            <Link to='/leaderboard' onClick={() => this.handleActiveTab('leaderboard')}>
              LeaderBoard
            </Link>
          </li>
          <li>
              Hey, <b>{users[authedUser].name}</b>
          </li>
          <li>
            <Link to='/' onClick={ this.handleLogout }>
              Logout
            </Link>
          </li>
        </ul>
        <hr></hr>
      </nav>
    )

  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Navmain)