// signUp
import * as api from '../api'

// Action Creators

export const signUp = (user) => async (dispatch) => {
    try {
      const { data } = await api.signUp(user);
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const signIn = (user) => async (dispatch) => {
  try {
    const { data } = await api.signIn(user);

    dispatch({ type: 'CREATE', payload: data }); // FETCH_ALL
  } catch (error) {
    console.log(error.message);
  }
};

// export const Dashboard = () => async (dispatch) => {
//   try {
//     const { data } = await api.Dashboard();

//     dispatch({ type: 'FETCH_ALL', payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };