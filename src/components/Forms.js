import React from 'react';
import settings from './Settings';
import speedToPace from './speedToPace';

class CalcForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            speed: settings.defaultSpeed,
        };
    
        const newPace = this.getPace(this.state.speed);
        this.props.handeSpeedChange(newPace);
        this.handleChange = this.handleChange.bind(this);
    }

    getPace(speed) {
        return speed > 0 ? speedToPace(speed) : 0
    }

    handleChange(event) {
        const newPace = this.getPace(event.target.value);
        this.setState({ speed: event.target.value });

        this.props.handeSpeedChange(newPace);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Speed (kp/h):</label>
                    <input type="number" min="1" max="30" step="0.1" value={this.state.speed} onChange={this.handleChange} />
                </form>
                
            </div>
        );
    }
}

export default CalcForm;