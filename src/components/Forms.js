import React from 'react';
import settings from './Settings';
import speedToPace from './speedToPace';

/**
 * Creates form with metric input that updates state
 */
class CalcForm extends React.Component {
    constructor(props) {
        super(props);

        // Get default speed from settings and assing it to state
        this.state = {
            speed: settings.defaultSpeed,
        };
    
        // Calculate initial pace from default speed
        const newPace = this.getPace(this.state.speed);

        // Send new pace up to props
        this.props.handeSpeedChange(newPace);

        // Bind handlers
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Run pace caclculation function
     * @param {Integer} speed 
     */
    getPace(speed) {
        return speed > 0 ? speedToPace(speed) : 0
    }

    /**
     * Change handler for input
     * @param {*} event 
     */
    handleChange(event) {
        // Calculate pace from form value
        const newPace = this.getPace(event.target.value);

        // Set speed state from form value
        this.setState({ speed: event.target.value });

        // Send new pace up to props
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