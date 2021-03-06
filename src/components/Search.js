import React, {
    Component
} from "react";
import {
    Input,
    Button,
    Select
} from "semantic-ui-react";

import { connect } from 'react-redux';
import { sendSearch, changeAdvancedMode } from "../actions/index";
import _ from "lodash";

import ComplexSearch from "./ComplexSearch";
import "../styles/search.css";

const categoryOptions = [{
    key: 'Baby Shoes',
    text: 'Baby Shoes',
    value: 147285
},
{
    key: 'Girls\' Shoes',
    text: 'Girls\' Shoes',
    value: 57974
}, {
    key: 'Boys\' Shoes',
    text: 'Boys\' Shoes',
    value: 57929
}, {
    key: 'Men\'s Shoes',
    text: 'Men\'s Shoes',
    value: 93427
}, {
    key: 'Women\'s Shoes',
    text: 'Women\'s Shoes',
    value: 3034
},
{
    key: 'Collectibles',
    text: 'Collectibles',
    value: 840
},
];

class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            searchCategory: 3034
        };
    }
    requestSearch() {
        this.props.sendSearch(
            this.state.searchQuery,
            this.state.searchCategory
        );
    }
    openAdvancedMode() {
        this.props.changeAdvancedMode();
    }

    RenderAdvancedSearch() {
        if (!_.isEmpty(this.props.advancedMode) &&
            this.props.advancedMode.isAdvanced) {
            return <ComplexSearch></ComplexSearch>;
        }
    }

    render() {

        return (
            <div className='search-container'>
                <Input centered type='text' placeholder='Search...' action className="search-input">
                    <input onChange={(e) =>
                        this.setState({ searchQuery: e.target.value })
                    } />
                    <Select
                        compact
                        options={categoryOptions}
                        defaultValue={3034}
                        placeholder='Choose category'
                        className="category-box"
                        onChange={(e, { value }) =>
                            this.setState({ searchCategory: value })
                        }
                    />
                    <Button type='submit' onClick={() =>
                        this.requestSearch()
                    }
                    >Search</Button>
                </Input>
                <a as='Button'
                    style={{ margin: "5px" }}
                    onClick={() => this.openAdvancedMode()}>
                    Advanced
                </a>
                {this.RenderAdvancedSearch()}
            </div>
        );
    }
}
const mapStateToProps = ({ advancedMode }) => {
    return { advancedMode };
};
export default connect(
    mapStateToProps,
    { sendSearch, changeAdvancedMode }
)(SearchComponent);