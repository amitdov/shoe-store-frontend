import React, {
    Component
} from "react";
import {
    Input,
    Button,
    Select
} from "semantic-ui-react";

import { connect } from 'react-redux';
import { sendSearch, changeAdvencedMode } from "../actions/index";
import _ from "lodash";
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
    text: 'Collectibles Site',
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

    clearState = () => {
        this.setState({
            searchQuery: '',
            searchCategory: 3034
        })
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
                    onClick={() => this.openAdvencedMode()}>
                    Advenced
                </a>
            </div>
        );
    }
    requestSearch() {
        this.props.sendSearch(
            this.state.searchQuery,
            this.state.searchCategory
        );
    }
    openAdvencedMode() {
        this.props.changeAdvencedMode();
    }
}
const categories = {
}
export default connect(
    null,
    { sendSearch, changeAdvencedMode }
)(SearchComponent);