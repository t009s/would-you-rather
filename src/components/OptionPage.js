import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TiArrowRight} from 'react-icons/ti/index'
import { handleAddQuestionAnswer } from '../actions/questions'

class OptionPage extends Component {
  
  handleAnswer = (answer) => {
    const {dispatch, id} = this.props
    
    dispatch(handleAddQuestionAnswer(id, answer))
  }
  
  render() {
    const { id, questions, users, authedUser } = this.props
    const question = questions[id]
    if (question === undefined) {
      return <h1>404 Not found</h1>
    }
    const user = users[question.author]
    const {name, avatarURL} = user
    const {optionOne, optionTwo} = question
    const answer = users[authedUser].answers[id]
  
    return (
      <div>
      { answer === undefined
        ? <div className='user'>
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
            <div onClick={() => this.handleAnswer('optionOne')} className='btn'>
              {optionOne.text}
            </div>
            <div  onClick={() => this.handleAnswer('optionTwo')} className='btn'>
              {optionTwo.text}
            </div>
          </div>
        : <div className='user'>
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
      }
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions, users}, props) {
  const {id} = props.match.params
  
  return {
    id,
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(OptionPage)