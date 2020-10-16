
import axiosService from 'services/AxiosServices';
import { extractApiErrors } from './index';
import { deleteResource } from './index';
const { rentalAxios } = axiosService;


export const verifyRentalOwner = (rentalId) => {
    return rentalAxios.get(`/rentals/${rentalId}/verify-user`);
}

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

export const fetchUserRentals = () => dispatch => {
    dispatch({type: 'REQUEST_DATA', resource: 'manage-rentals'});
    return rentalAxios.get('/rentals/me')
        .then(res => res.data)
        .then(rentals => {
            dispatch({
                type: 'REQUEST_DATA_COMPLETE',
                data: rentals,
                resource: 'manage-rentals'
            })
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

export const updateRental = (id, rentalData) => dispatch => {
    return rentalAxios.patch(`/rentals/${id}`, rentalData)
        .then(res => res.data)
        .then(updatedRental => 
            dispatch({
                type: 'UPDATE_RENTAL_SUCCESS',
                rental: updatedRental
            })
        )
        .catch(error => Promise.reject(extractApiErrors(error.response || [])))
} 

export const deleteRental = rentalId => dispatch => {
    return dispatch(
        deleteResource(
            {url: `/rentals/${rentalId}`,
             resource: 'manage-rentals'}))
} 