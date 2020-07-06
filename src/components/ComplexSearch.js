
import React, { Component } from 'react';
import { Form, Input, Select, Button, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateAdvancedData } from "../actions/index";

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
            startPrice: '',
            endPrice: '',
            color: null,
            brand: null
        };
    }
    isUpTo2Decimal(n) {
        const upTo2DecimalRegex = /^\d+(\.\d{0,2})?$/;
        return upTo2DecimalRegex.test(n);
    }

    startPriceOnChange(value) {
        const isLegal = value === '' || this.isUpTo2Decimal(value);
        if (isLegal) {
            this.setState({ startPrice: value });
            this.updateAdvancedData({ startPrice: value });
        }

    };
    endPriceOnChange(value) {
        const isLegal = value === '' || this.isUpTo2Decimal(value);
        if (isLegal) {
            this.setState({ endPrice: value });
            this.updateAdvancedData({ endPrice: value });
        }
    };

    updateAdvancedData(changedData) {
        this.props.updateAdvancedData(changedData);
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
                            value={this.state.startPrice}
                            onChange={(e, { value }) => {
                                this.startPriceOnChange(value);
                            }}
                        />
                        <Form.Field
                            width={2}
                            control={Input}
                            label='To'
                            placeholder='price'
                            value={this.state.endPrice}
                            onChange={(e, { value }) => {
                                this.endPriceOnChange(value);
                            }}
                        />
                        <Form.Field
                            width={6}
                            control={Select}
                            label='Color'
                            options={colorOptions}
                            placeholder='Select color'
                            onChange={(e, { value }) => {
                                this.setState({ color: value });
                                this.updateAdvancedData({ color: value });
                            }}
                        />
                        <Form.Field
                            width={6}
                            control={Select}
                            label='Brand'
                            options={brandOptions}
                            placeholder='Select brand'
                            onChange={(e, { value }) => {
                                this.setState({ brand: value });
                                this.updateAdvancedData({ brand: value });
                            }}
                        />
                    </Form.Group>
                </Form>
            </Segment>
        );
    }
}
const mapStateToProps = ({ advancedMode }) => {
    return { advancedMode };
};

export default connect(mapStateToProps, { updateAdvancedData })(ComplexSearch);