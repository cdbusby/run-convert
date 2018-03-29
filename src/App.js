import React, { Component } from 'react';
import Menu from './components/Menu';
import CalcForm from './components/CalcForm';
import Results from './components/Results';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

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
        <Menu />
        <Container>
            <h1 className="mt-5 mb-5">Running Unit Conversion</h1>
            <Row>
              <Col className="col-12 col-sm-4 d-flex align-items-center">
                <h2>Speed to Pace</h2>
              </Col>
              <Col className="col-12 col-sm-8">
                <Row>
                  <Col className="col-12 col-md-6">
                    <CalcForm handeSpeedChange={this.handeSpeedChange} pace={this.state.pace} unit="Speed" metric="km/h"/>
                  </Col>
                  <Col className="col-12 col-md-6">
                    <Results unit="Pace" value={this.state.pace} metric="min/km"/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
