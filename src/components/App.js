import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Login from './Login'
import Navmain from './Navmain'
import Newque from './Newque'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import LoadingBar from 'react-redux-loading'
import NotFound from './NotFound'
import OptionPage from './OptionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? <div>
                  <Login />
                </div>
              : <div>
                  <Navmain />
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add' component={Newque} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/question/:id' component={OptionPage} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)