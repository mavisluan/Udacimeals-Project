import React, { Component } from 'react';
//import connect to pass the state and (dispatch)actions to React Components as props
import { connect } from 'react-redux';
class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

function mapStateToProps(calendar) {
  return {
     calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: {...calendar[day]}
      }))
  }
}


//connect()() curried function
//Pass mapStateToProps to call the first function and pass the state to App as props
export default connect(mapStateToProps)(App);
