import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

class NewTweet extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }
  
  handleChange1 = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText
    }))
  }
  handleChange2 = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText
    }))
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    
    const {optionOneText, optionTwoText} = this.state
    const {dispatch, authedUser} = this.props
    
    const questionText = {
      optionOneText,
      optionTwoText,
      author: authedUser
    }
    
    dispatch(handleAddQuestion(questionText))
    
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }
  
  render() {
    const {optionOneText, optionTwoText, toHome} = this.state
    
    if (toHome === true) {
      return <Redirect to='/' />  
    }
    
    return (
      <div>
        <h3 className='center'>Compose New Question</h3>
        <h4 className='center'>Would You Rather</h4>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="textarea"
            placeholder="Option One"
            value={optionOneText}
            onChange={this.handleChange1}
          />
          <br></br>
          <input 
            type="text"
            className="textarea"
            placeholder="Option Two"
            value={optionTwoText}
            onChange={this.handleChange2}
          />
          <button 
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
            Submit
          </button>  
        </form>
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewTweet)