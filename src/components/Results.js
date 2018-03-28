import React from 'react';

/**
 * Displays results of given metric
 */
class Results extends React.Component {
    render() {
        return (
            <p>{this.props.unit}: {this.props.value} {this.props.metric}</p>
        );
    }
}

export default Results;