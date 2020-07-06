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
    // if (response.status === 200) {
    //     if (response.data.err && response.data.err.message) {
    //         dispatch({
    //             type: VALIDATE_QUERY_STATUS,
    //             payload: {
    //                 type: "error",
    //                 isValid: false,
    //                 message: response.data.err.message,
    //             },
    //         });
    //     } else if (response.data[0] && response.data[0].message) {
    //         dispatch({
    //             type: VALIDATE_QUERY_STATUS,
    //             payload: {
    //                 type: "error",
    //                 isValid: false,
    //                 message: response.data[0].message,
    //             },
    //         });
    //     } else {
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


// export const clearServerStatus = () => (dispatch) => {
//   dispatch({ type: SERVER_STATUS, payload: {} });
//   dispatch({ type: VALIDATE_QUERY_STATUS, payload: {} });
// };
export const HANDLE_VIEW_OPEN = 'HANDLE_VIEW_OPEN';
export const SERVER_STATUS = "SERVER_STATUS";
export const SEARCH_RESULTS = "SEARCH_RESULTS";