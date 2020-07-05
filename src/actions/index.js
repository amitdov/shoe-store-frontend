import _ from "lodash";
import server from "../apis/ServerApi";

// export const login = (userName, password, userDisplayName, userId) => async (
//   dispatch,
//   getState
// ) => {
//   let loginResponse = await server()
//     .post("/users/authenticate/", {
//       userName: userName,
//       password: password,
//     })
//     .catch(function(error) {
//       if (error.response.status) {
//         dispatch(failLogin(error.response.status));
//       }
//     });
//   if (loginResponse) {
//     const user = loginResponse.data.user;
//     dispatch({
//       type: LOGIN,
//       payload: {
//         userName,
//         password,
//         userDisplayName,
//         userId,
//         userKind: user.userKind,
//         permittedSystems: user.permittedSystems,
//         managedSystems: user.managedSystems,
//       },
//     });
//     await dispatch(fetchSystems(userId));
//     if (!_.isEmpty(getState().systemsNames)) {
//       dispatch(
//         fetchVersionQueries(getState().systemsNames[0].versions[0].id, userId)
//       );
//     }
//   }
// };

// export const logout = () => (dispatch) => {
//   dispatch({
//     type: LOGOUT,
//     payload: {},
//   });
//   dispatch({
//     type: SETTINGS,
//     payload: {},
//   });
// };

// export const fetchQuery = (queryId, querySystem) => async (dispatch) => {
//   const queryResponse = await server().get("/queries/?id=" + queryId, {
//     headers: { "Content-Type": "application/json" },
//   });

//   const queryContent = queryResponse.data.queries.query.body;
//   const description = queryResponse.data.queries.description;
//   const queryName = queryResponse.data.queries.name;

//   dispatch({
//     type: HANDLE_VIEW_OPEN,
//     payload: {
//       shown: true,
//       editMode: false,
//       activeSystem: querySystem,
//       queryName: queryName,
//       queryId: queryId,
//       queryContent: queryContent,
//       description: description,
//     },
//   });
// };

// export const saveNewQuery = (
//   queryName,
//   queryContent,
//   description,
//   versionId
// ) => async (dispatch, getState) => {
//   const query = {
//     query: {
//       userId: getState().loginData.userId,
//       versionId,
//       name: queryName,
//       description,
//       query: {
//         body: queryContent,
//         headers: "",
//       },
//     },
//   };

//   const response = await server().post("queries/createQuery", query, {
//     headers: { "Content-Type": "application/json" },
//   });
//   updateServerStatus(response, dispatch);
//   dispatch(fetchVersionQueries(versionId, getState().loginData.userId));
// };

// export const UpdateQuery = (
//   queryId,
//   queryName,
//   queryContent,
//   description,
//   versionId
// ) => async (dispatch, getState) => {
//   const query = {
//     query: {
//       id: queryId,
//       userId: getState().loginData.userId,
//       versionId,
//       name: queryName,
//       description,
//       query: {
//         body: queryContent,
//         headers: "",
//       },
//     },
//   };

//   const response = await server().post("queries/updateQuery", query, {
//     headers: { "Content-Type": "application/json" },
//   });
//   updateServerStatus(response, dispatch);
//   dispatch(fetchVersionQueries(versionId, getState().loginData.userId));
// };

// export const deleteQuery = (queryId, versionId) => async (
//   dispatch,
//   getState
// ) => {
//   const query = {
//     queryId: queryId,
//   };

//   const response = await server().delete("queries/deleteQuery", {
//     headers: { "Content-Type": "application/json" },
//     data: query,
//   });
//   updateServerStatus(response, dispatch);
//   dispatch(fetchVersionQueries(versionId, getState().loginData.userId));
// };

export const sendSearch = (queryText, category) => async (dispatch, getState) => {

    const response = await server().get(
        "search?queryText=" + queryText + "&category=" + category
    );
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
    //         dispatch({
    //             type: VALIDATE_QUERY_STATUS,
    //             payload: {
    //                 type: "success",
    //                 isValid: true,
    //             },
    //         });
    //     }
    // }
};

// export const clearServerStatus = () => (dispatch) => {
//   dispatch({ type: SERVER_STATUS, payload: {} });
//   dispatch({ type: VALIDATE_QUERY_STATUS, payload: {} });
// };
export const HANDLE_VIEW_OPEN = 'HANDLE_VIEW_OPEN';
export const SERVER_STATUS = "SERVER_STATUS";
export const VALIDATE_QUERY_STATUS = "VALIDATE_QUERY_STATUS";