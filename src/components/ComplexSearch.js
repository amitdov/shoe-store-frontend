
import React, { Component } from 'react';
import { Form, Input, Select, Button, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const colorOptions = [
    { key: 'none', text: 'None', value: null },
    { key: 'red', text: 'Red', value: 'red' },
    { key: 'orange', text: 'Orange', value: 'orange' },
    { key: 'yellow', text: 'Yellow', value: 'yellow' },
    { key: 'olive', text: 'Olive', value: 'olive' },
    { key: 'green', text: 'Green', value: 'green' },
    { key: 'teal', text: 'Teal', value: 'teal' },
    { key: 'blue', text: 'Blue', value: 'blue' },
    { key: 'violet', text: 'Violet', value: 'violet' },
    { key: 'purple', text: 'Purple', value: 'purple' },
    { key: 'pink', text: 'Pink', value: 'pink' },
    { key: 'brown', text: 'Brown', value: 'brown' },
    { key: 'grey', text: 'Grey', value: 'grey' },
    { key: 'black', text: 'Black', value: 'black' }
];
const brandOptions = [
    { key: 'none', text: 'None', value: null },
    { key: 'nike', text: 'Nike', value: 'Nike' },
    { key: 'adidas', text: 'Adidas', value: 'Adidas' },
    { key: 'blundstone', text: 'Blundstone', value: 'Blundstone' },
    { key: 'timberland', text: 'Timberland', value: 'Timberland' },
    { key: 'converse', text: 'Converse', value: 'Converse' },
    { key: 'crocs', text: 'Crocs', value: 'Crocs' },
    { key: 'vans', text: 'Vans', value: 'Vans' }
];
class ComplexSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startPrice: null,
            endPrice: null,
            color: null,
            brand: null
        };
    }

    render() {
        return (
            <Segment>
                <Form>
                    <Form.Group>
                        <Form.Field
                            width={2}
                            control={Input}
                            label='Form'
                            placeholder='price'
                            onChange={(e) =>
                                this.setState({ startPrice: e.target.value })}
                        />
                        <Form.Field
                            width={2}
                            control={Input}
                            label='To'
                            placeholder='price'
                            onChange={(e) =>
                                this.setState({ endPrice: e.target.value })}
                        />
                        <Form.Field
                            width={4}
                            control={Select}
                            label='Color'
                            options={colorOptions}
                            placeholder='Select color'
                            onChange={(e) =>
                                this.setState({ color: e.target.value })}
                        />
                        <Form.Field
                            width={4}
                            control={Select}
                            label='Brand'
                            options={brandOptions}
                            placeholder='Select brand'
                            onChange={(e) =>
                                this.setState({ brand: e.target.value })}
                        />
                    </Form.Group>
                </Form>
            </Segment>
        );
    }
}


export default
    (ComplexSearch);