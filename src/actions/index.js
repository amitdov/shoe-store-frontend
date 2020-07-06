import _ from "lodash";
import server from "../apis/ServerApi";


export const sendSearch = (queryText, category) => async (dispatch, getState) => {
    dispatch({
        type: SEARCH_RESULTS,
        payload: {
            isInSearch: true
        }
    });
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

export const changeAdvencedMode = () => (dispatch, getState) => {
    dispatch({
        type: ADVENCED_MODE,
        payload: _.isEmpty(getState().advencedMode) ? { isAdvenced: true } :
            { isAdvenced: !getState().advencedMode.isAdvenced }
    });
}
export const ADVENCED_MODE = 'ADVENCED_MODE';
export const SEARCH_RESULTS = "SEARCH_RESULTS";