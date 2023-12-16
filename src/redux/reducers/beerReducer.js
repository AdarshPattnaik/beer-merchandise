import {
    FETCH_BEERS_REQUEST,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_FAILURE
} from '../actions/actions';

const initialState = {
    beers: [],
    loading: false,
    error: null
};

const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BEERS_SUCCESS:
            // console.log(state);
            return {
                ...state,
                loading: false,
                beers: action.payload,
                error: null
            };
        case FETCH_BEERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default beerReducer;