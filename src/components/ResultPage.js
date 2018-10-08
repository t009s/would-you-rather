import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TiArrowRight} from 'react-icons/ti/index'


class ResultPage extends Component {
  render () {
    
    const {user, question, authedUser, users} = this.props
    const {name, avatarURL} = user
    const {id, optionOne, optionTwo} = question
    const answer = users[authedUser].answers[id]  
    return (
      <div className='user'>
        <img
          className='avatar'
          src = {avatarURL}
          alt = {`Avatar of ${name}`}
        />
        <div className='user-info'>
          <div>
            <span>{`Asked by ${name}`}</span>
            <br></br>
            <span>Results</span>
            <br></br>
            <TiArrowRight className='small-arrow'/>
          </div>
        </div>
        <button
          className={"btn1 " + (answer === 'optionOne' ? 'active1' : '')}>
          {`Would you rather ${optionOne.text}`}
          <br></br><br></br>
          {`${optionOne.votes.length} out of ${optionOne.votes.length + optionTwo.votes.length} votes (${Math.round(100 * 100 * optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length))/100}%)`}
        </button>
        <button
          className={"btn1 " + (answer === 'optionTwo' ? 'active1' : '')}>
          {`Would you rather ${optionTwo.text}`}
          <br></br><br></br>
          {`${optionTwo.votes.length} out of ${optionOne.votes.length + optionTwo.votes.length} votes (${Math.round(100 * 100 * optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length))/100}%)`}
        </button>
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser, questions}, props) {
  const {id} = props.match.params
  const question = questions[id]
  const user = users[question.author]
  
  return {
    id,
    question,
    user,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(ResultPage)