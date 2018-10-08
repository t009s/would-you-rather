import React, {Component} from 'react'
import {connect} from 'react-redux'
import LeaderboardUser from './LeaderboardUser'

class Leaderboard extends Component {
  render () {
    const {userIds} = this.props
    return (
      <div>
        <ul className='users-list'>
          {userIds.map((id) => (
            <li key={id}>
                <LeaderboardUser id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => Object.keys(users[b].answers).length - Object.keys(users[a].answers).length)
  }

}

export default connect(mapStateToProps)(Leaderboard)