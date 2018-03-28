import React from 'react';

class Results extends React.Component {
    render() {
        return (
            <p>Pace: {this.props.pace} min/km</p>
        );
    }
}

export default Results;