import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderboardUser extends Component {
  render() {
    const {user} = this.props
    
    const {name, avatarURL, answers, questions} = user
    return (
      <div className='user'>
        <img 
          className = 'avatar'
          src = {avatarURL}
          alt = {`Avatar of ${name}`}
        />
        <div className = 'user-info'>
          <div>
            <span>{name}</span>
          </div>
          <span>{`Answered Questions: ${Object.keys(answers).length}`}</span>
          <br></br>
          <span>{`Created Questions: ${Object.keys(questions).length}`}</span>
        </div>
        <div className='score'>
          <span>Score</span>
          <br></br>
          <span>{Object.keys(answers).length + Object.keys(questions).length}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}, {id}) {
  const user = users[id]

  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderboardUser)