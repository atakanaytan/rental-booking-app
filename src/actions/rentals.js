
import axiosService from 'services/AxiosServices';
const { rentalAxios } = axiosService;


export const fetchRentals = (location) => dispatch => {
    const query = location ? `/rentals?city=${location}` : '/rentals';
    dispatch({type: 'REQUEST_DATA', resource: 'rentals'});
    rentalAxios.get(query)
      .then(res => {
        const rentals = res.data;
        dispatch({type: 'REQUEST_DATA_COMPLETE', resource: 'rentals'});
        dispatch({
            type: 'FETCH_RENTALS',
            rentals
        });
    })
}

export const fetchRentalById = rentalId => async dispatch => {
    dispatch({type: 'REQUEST_DATA', resource: 'rental'});
    const res = await rentalAxios.get(`/rentals/${rentalId}`)
    dispatch({type: 'REQUEST_DATA_COMPLETE', resource: 'rental'});
    dispatch({
        type: 'FETCH_RENTAL_BY_ID',
        rental: res.data   
    });
}

export const createRental = rental => {
    return rentalAxios.post('/rentals', rental);
}
