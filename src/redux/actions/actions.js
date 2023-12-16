import axios from 'axios';

export const FETCH_BEERS_REQUEST = 'FETCH_BEERS_REQUEST';
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE';

export const fetchBeers = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_BEERS_REQUEST });

        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                // console.log("API: \n", res.data[0]);
                // res.data.forEach((beer, index) => {
                //     console.log(`Beer ${index + 1}:`, beer);
                // });

                dispatch({
                    type: FETCH_BEERS_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCH_BEERS_FAILURE,
                    payload: err.message
                });
            });
    };
};