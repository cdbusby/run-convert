import React from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

/**
 * Displays results of given metric
 */
class Results extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label>{this.props.unit}</Label>
                <InputGroup>
                    <Input type="text" value={this.props.value} disabled/>
                    <InputGroupAddon addonType="append">{this.props.metric}</InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default Results;