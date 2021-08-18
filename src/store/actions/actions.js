import {SET_ACTIVITIES} from "./actionTypes";
import {SET_ICONBAR} from "./actionTypes";


export const setActivities = (value) => {
    return {
      type: SET_ACTIVITIES,
      payload: {
          Activities: value,
      }
    };
};


export const setIconbar = (value) => {
  return {
    type: SET_ICONBAR,
    payload: {
      Iconbar: value,
    }
  };
};

// export const setDarkTheme = (value) => {
//   return {
//     type: SET_DARK_THEME,
//     payload: {
//       darkTheme: value,
//     },
//   };
// };
