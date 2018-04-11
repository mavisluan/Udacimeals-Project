import React, { Component } from 'react';
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount() {
    const {store} = this.props
// whenever the redux store changes, the App component's //state will be updated
    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    //when a new input recipe is submitted, the store will //dispatch addRecipe action creator(take {day, meal, //recipe} as arguments.
    //the input value (recipe) will update that day's recipe )
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }))
    //once the input is submitted, the input value will be reset to ''
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>
        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default App;
