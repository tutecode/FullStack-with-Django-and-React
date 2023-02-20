import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from '../actions/categories/types'

const initialState = {
    categories: null
}

export default function categories(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload.categories // data from JSON
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: null
            }
        default:
            return state
    }
}