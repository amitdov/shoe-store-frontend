import _ from "lodash";
import server from "../apis/ServerApi";


export const sendSearch = (queryText, category) => async (dispatch, getState) => {
    dispatch({
        type: SEARCH_RESULTS,
        payload: {
            isInSearch: true
        }
    });
    if (!_.isEmpty(getState().advancedMode) &&
        getState().advancedMode.isAdvanced) {

    }
    const query = {
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

    }
    const response = await server().post("graphql", query,);

    const result = response.data.data.searchShoes;
    if (result == null) {
        dispatch({
            type: SEARCH_RESULTS,
            payload: {
                noResults: true
            }

        });
    } else {
        const shoesList = response.data.data.searchShoes.map((shoes) => {
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