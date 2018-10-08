import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {TiArrowRight} from 'react-icons/ti/index'

class Answered extends Component {
  render () {
    const {user, question} = this.props
    const {name, avatarURL} = user
    const {id, optionOne, optionTwo} = question
    return (
      <Link to={`/question/${id}`} className="user">
        <img
          className='avatar'
          src = {avatarURL}
          alt = {`Avatar of ${name}`}
        />
        <div className='user-info'>
          <div>
            <span>{`${name} asks:`}</span>
            <br></br>
            <span>Would You Rather</span>
            <br></br>
            <TiArrowRight className='small-arrow'/>
          </div>
        </div>
        <div className='option'>
          {`...${optionOne.text} or ${optionTwo.text}...`}
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, {id}) {
  const question = questions[id]
  const user = users[question.author]
  return {
    user,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Answered))