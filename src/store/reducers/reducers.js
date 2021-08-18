import * as actionTypes from "../actions/actionTypes";


const initState = {
  Activities: false,
  Iconbar: false,
};


const reducer = (state = initState,action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVITIES:
        return {
          ...state,
          Activities: action.payload.Activities
        }

    case actionTypes.SET_ICONBAR:
    return{
      ...state,
      Iconbar: action.payload.Iconbar
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
