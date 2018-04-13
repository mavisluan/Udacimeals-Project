import React, { Component } from 'react';
//import connect to pass the state and (dispatch)actions to React Components as props
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

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

/*function mapStateToProps(calendar) {
  return {
     calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: {...calendar[day]}
      }))
  }
} */

function mapStateToProps ({ food, calendar }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar][day][meal]
          : null

        return meals
      }, {})
    })),
  }
}


function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

//connect()() curried function
//Pass mapStateToProps to call the first function and pass the state to App as props
//Use mapDispatchToProps to pass actions to App as props
export default connect(mapStateToProps, mapDispatchToProps)(App);
