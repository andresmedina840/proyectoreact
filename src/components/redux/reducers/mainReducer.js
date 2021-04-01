import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "../types"

const initialState = {
    usuario: [],    
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                usuario: action.payload,
                error: false
            }
        case LOGIN_ERROR:
            return{
                ...state,
                usuario: [],
                error: true
            }
        default:
            return state
    }
}

