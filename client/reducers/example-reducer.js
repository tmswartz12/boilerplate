import axios from "axios";

//example initialstate
const initialState = {
  campuses: [],
  individualCampus: { name: "", students: [] }
};
/* -------------- example action type*/
const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES";

/* -------------- example action creator*/
export const getAllCampuses = campuses => {
  return {
    type: GET_ALL_CAMPUSES,
    campuses
  };
};

/* -------------- example thunk*/
export const fetchAllCampuses = () => {
  return async dispatch => {
    const response = await axios.get("/api/campuses");
    const campuses = response.data;
    const action = getAllCampuses(campuses);
    dispatch(action);
  };
};

/* -------------- example reducer*/

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return { ...state, campuses: action.campuses };
    default:
      return state;
  }
}
