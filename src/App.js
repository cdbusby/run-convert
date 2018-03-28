import React, { Component } from 'react';
import CalcForm from './components/Forms';
import Results from './components/Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pace: 0
    }
    this.handeSpeedChange = this.handeSpeedChange.bind(this);
  }

  handeSpeedChange(pace) {
    this.setState({pace});
  }

  render() {
    return (
      <div className="App">  
        <CalcForm handeSpeedChange={this.handeSpeedChange} pace={this.state.pace}/>
        <Results pace={this.state.pace}/>
      </div>
    );
  }
}

export default App;
