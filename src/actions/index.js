import _ from "lodash";
import server from "../apis/ServerApi";


export const sendSearch = (queryText, category) => async (dispatch, getState) => {
    dispatch({
        type: SEARCH_RESULTS,
        payload: {
            isInSearch: true
        }
    });
    let query;
    let result;
    let response;

    if (!_.isEmpty(getState().advancedMode) &&
        getState().advancedMode.isAdvanced) {
        query = {
            query: "query{\n" +
                "complexSearch(queryText:\"" + queryText + "\"" +
                ",category:" + category +
                ",startPrice:" + returnObjectOrNull(getState().advancedMode.startPrice) +
                ",endPrice:" + returnObjectOrNull(getState().advancedMode.endPrice) +
                ",color:\"" + returnObjectOrNull(getState().advancedMode.color) + "\"" +
                ",brand:\"" + returnObjectOrNull(getState().advancedMode.brand) + "\"" +
                ",limit:" + 16 +
                ",offset:" + 0 + "){" +
                "id \n" +
                "name \n" +
                "pictureLink \n" +
                "price { \n" +
                "value \n" +
                "currency \n" +
                "} \n" +
                "}\n" +
                "}",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin': '*'
            }

        };
        response = await server().post("graphql", query);
        result = response.data.data.complexSearch;
    }
    else {
        query = {
            query: "query{\n" +
                "searchShoes(queryText:\"" + queryText + "\"" +
                ",category:" + category + "){" +
                "id \n" +
                "name \n" +
                "pictureLink \n" +
                "price { \n" +
                "value \n" +
                "currency \n" +
                "} \n" +
                "}\n" +
                "}",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin': '*'
            }

        };
        response = await server().post("graphql", query);
        result = response.data.data.searchShoes;
    }

    if (result == null) {
        dispatch({
            type: SEARCH_RESULTS,
            payload: {
                noResults: true
            }

        });
    } else {
        const shoesList = result.map((shoes) => {
            return {
                id: shoes.id,
                price: shoes.price,
                pictureLink: shoes.pictureLink,
                name: shoes.name
            };
        });
        dispatch({
            type: SEARCH_RESULTS,
            payload: shoesList
        });
    }
}
const returnObjectOrNull = (value) => {
    if (value == undefined || value == '') {
        return null;
    } else {
        return value;
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
    console.log(changedData)
    dispatch({
        type: ADVANCED_MODE,
        payload: { ...getState().advancedMode, ...changedData }
    });
}
export const ADVANCED_MODE = 'ADVANCED_MODE';
export const SEARCH_RESULTS = "SEARCH_RESULTS";