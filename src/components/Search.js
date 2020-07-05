import React, {
    Component
} from "react";
import {
    Input,
    Button,
    Select
} from "semantic-ui-react";

import { connect } from 'react-redux';
import { sendSearch } from "../actions/index";
import _ from "lodash";
import "../styles/search.css";

const categoryOptions = [{
    key: 'All',
    text: 'All',
    value: 'All'
},
{
    key: 'org',
    text: 'This Organization',
    value: 'org'
},
{
    key: 'site',
    text: 'Entire Site',
    value: 'site'
},
];

class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            searchCategory: ''
        };
    }

    clearState = () => {
        this.setState({
            searchQuery: '',
            searchCategory: ''
        })
    }
    render() {

        return (
            <div class='search-container'>
                <Input type='text' placeholder='Search...' action className="search-input">
                    <input onChange={(e) =>
                        this.setState({ searchQuery: e.target.value })
                    } />
                    <Select
                        compact
                        options={categoryOptions}
                        placeholder='Choose category'
                        className="category-box"
                        onChange={(e, { value }) =>
                            this.setState({ searchCategory: value })
                        }
                    />
                    <Button type='submit' onClick={() =>
                        this.RequestSearch()
                    }>Search</Button>
                </Input>
            </div>
        );
    }
    RequestSearch() {
        if (!_.isEmpty(this.state.searchQuery) ||
            !_.isEmpty(this.state.searchCategory)) {
            this.props.sendSearch(
                this.state.searchQuery,
                this.state.searchCategory
            );
        }
    }
}
export default connect(
    null,
    { sendSearch }
)(SearchComponent);