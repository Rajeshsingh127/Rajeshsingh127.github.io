import * as actionTypes from "../actions/actionTypes";

const initState = {
  Activities: false,

};


const reducer = (state = initState,action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVITIES:
        return {
          ...state,
          Activities: action.payload.Activities
        }
  }
  return state
}

export default reducer;
//
// if (action.type === actionTypes.SET_LANGUAGE) {
//     saveState("language", `${action.payload.currentLanguage}`);
//     return {
//       ...state,
//       currentLanguage: action.payload.currentLanguage,
//     };
//   }
