import _ from "lodash";
import server from "../apis/ServerApi";

export const ADVANCED_MODE = 'ADVANCED_MODE';
export const SEARCH_RESULTS = "SEARCH_RESULTS";

const LIMIT_DEFAULT = 16;
const OFFSET_START = 0;
const QUOTATION_MARKS = "\"";
const DATA_STRACTURE = "{" +
    "totalCount\n" +
    "nextPage\n" +
    "data{ \n" +
    "id \n" +
    "name \n" +
    "pictureLink \n" +
    "price { \n" +
    "value \n" +
    "currency \n" +
    "} \n" +
    "}\n" +
    "}\n";

export const getNextPage = () => async (dispatch, getState) => {
    const nextPage = getState().searchResults.nextPage;
    ClearSearchState(dispatch);
    const query = {
        query: "query{\n" +
            "nextPage(hRef:" + QUOTATION_MARKS + nextPage + QUOTATION_MARKS + ")" +
            DATA_STRACTURE +
            "}",
        headers: {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*'
        }

    };
    const response = await server().post("graphql", query);
    const result = response.data.data.nextPage;
    const shoesList = result.data.map((shoes) => {
        return {
            id: shoes.id,
            price: shoes.price,
            pictureLink: shoes.pictureLink,
            name: shoes.name
        };
    });
    dispatch({
        type: SEARCH_RESULTS,
        payload: {
            shoesList,
            numOfPages: result.totalCount / LIMIT_DEFAULT,
            nextPage: result.nextPage
        }
    });

}

export const sendSearch = (queryText, category) => async (dispatch, getState) => {
    ClearSearchState(dispatch);
    let query;
    let result;
    let response;

    if (!_.isEmpty(getState().advancedMode) &&
        getState().advancedMode.isAdvanced) {
        query = BuildComplexSearchQuery(query, queryText, category, getState);
        response = await server().post("graphql", query);
        result = response.data.data.complexSearch;
    }
    else {
        query = BuildSearchQuery(query, queryText, category);
        response = await server().post("graphql", query);
        result = response.data.data.searchShoes;
    }

    if (result === null) {
        dispatch({
            type: SEARCH_RESULTS,
            payload: {
                noResults: true
            }
        });
    } else {
        const shoesList = result.data.map((shoes) => {
            return {
                id: shoes.id,
                price: shoes.price,
                pictureLink: shoes.pictureLink,
                name: shoes.name
            };
        });
        dispatch({
            type: SEARCH_RESULTS,
            payload: {
                shoesList,
                numOfPages: result.totalCount / LIMIT_DEFAULT,
                nextPage: result.nextPage
            }
        });
    }
}

export const changeAdvancedMode = () => (dispatch, getState) => {
    dispatch({
        type: ADVANCED_MODE,
        payload: _.isEmpty(getState().advancedMode) ? { isAdvanced: true } :
            { isAdvanced: !getState().advancedMode.isAdvanced }
    });
}

export const updateAdvancedData = (changedData) => (dispatch, getState) => {
    dispatch({
        type: ADVANCED_MODE,
        payload: { ...getState().advancedMode, ...changedData }
    });
}

const returnObjectOrNull = (value) => {
    if (value === undefined || value === '') {
        return null;
    } else {
        if (typeof value === "string") {
            return QUOTATION_MARKS + value + QUOTATION_MARKS;
        }
        else {
            return value;
        }
    }
}

function BuildSearchQuery(query, queryText, category) {
    query = {
        query: "query{\n" +
            "searchShoes(queryText:" + returnObjectOrNull(queryText) + "" +
            ",category:" + category +
            ",limit:" + LIMIT_DEFAULT +
            ",offset:" + OFFSET_START + ")" +
            DATA_STRACTURE +
            "}",
        headers: {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*'
        }
    };
    return query;
}

function BuildComplexSearchQuery(query, queryText, category, getState) {
    query = {
        query: "query{\n" +
            "complexSearch(queryText:" + returnObjectOrNull(queryText) +
            ",category:" + category +
            ",startPrice:" + returnObjectOrNull(getState().advancedMode.startPrice) +
            ",endPrice:" + returnObjectOrNull(getState().advancedMode.endPrice) +
            ",color:" + returnObjectOrNull(getState().advancedMode.color) +
            ",brand:" + returnObjectOrNull(getState().advancedMode.brand) +
            ",limit:" + LIMIT_DEFAULT +
            ",offset:" + OFFSET_START + ")" +
            DATA_STRACTURE +
            "}",
        headers: {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*'
        }
    };
    return query;
}

function ClearSearchState(dispatch) {
    dispatch({
        type: SEARCH_RESULTS,
        payload: {
            isInSearch: true
        }
    });
}
