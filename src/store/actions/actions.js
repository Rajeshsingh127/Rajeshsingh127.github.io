import {SET_ACTIVITIES} from "./actionTypes";



export const setActivities = (value) => {
    return {
      type: SET_ACTIVITIES,
      payload: {
          Activities: value,
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
