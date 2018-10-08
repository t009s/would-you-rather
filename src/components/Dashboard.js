import React, {Component} from 'react'
import {connect} from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'

class Dashboard extends Component {
  state = {
    quesType: 'unans'
  }
  
  handleQuesType = (quesType) => {
    this.setState(() => ({
      quesType
    }))
  }

  render () { 
    return (
      <div>
          <nav className='nav'>
            <ul id='horizontal'>
              <li 
                className={this.state.quesType === 'unans' ? 'active-tab' : ' '}
                onClick={() => this.handleQuesType('unans')}>
                  Unanswered
              </li>
              <li 
                className={this.state.quesType === 'ans' ? 'active-tab' : ' '}
                onClick={() => this.handleQuesType('ans')}>
                  Answered
              </li>
            </ul>
          </nav>
            <br></br>
            {this.state.quesType === 'unans' 
              ? <ul className='unanswered-list'>
                {this.props.unanswerIds.map((id) => (
                  <li key={id}>
                    <Unanswered id={id} />
                  </li>
                ))}
              </ul>
              : <ul className='Answered-list'>
                {this.props.answerIds.map((id) => (
                  <li key={id}>
                    <Answered id={id} />
                  </li>
                ))}
              </ul>
            }
      </div>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}) {
  return {
    unanswerIds: Object.keys(questions).filter(id => !users[authedUser].answers[id]).sort((a,b)=>questions[b].timestamp- questions[a].timestamp),
    answerIds: Object.keys(questions).filter(id => users[authedUser].answers[id]).sort((a,b)=>questions[b].timestamp- questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)