import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "../types";



// Login User
export function loginAction(usuario) {

        
     return async(dispatch) => {
         dispatch(login());
         
         try {
             dispatch(loginSuccess(usuario));
         } catch (error) {
             dispatch(loginError(error));
         }
    }
}

const login = () => ({
    type: LOGIN_START
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
})