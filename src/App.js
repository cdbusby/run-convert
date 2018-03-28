import React, { Component } from 'react';
import CalcForm from './components/Forms';
import Results from './components/Results';
import './App.css';

/**
 * Main app
 */
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pace: '0:00'
    }
    this.handeSpeedChange = this.handeSpeedChange.bind(this);
  }

  /**
   * *  Set app/prop state from form
   * @param {String} pace 
   */
  handeSpeedChange(pace) {
    this.setState({pace});
  }

  render() {
    return (
      <div className="App">  
        <CalcForm handeSpeedChange={this.handeSpeedChange} pace={this.state.pace}/>
        <Results unit="Pace" value={this.state.pace} metric="min/km"/>
      </div>
    );
  }
}

export default App;
