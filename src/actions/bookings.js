
import axiosService from 'services/AxiosServices';
import { extractApiErrors } from './index';
const { rentalAxios } = axiosService;


export const createBooking = booking =>{

    return rentalAxios.post('/bookings', booking)
        .then(res => res.data)
        .catch(err => Promise.reject(extractApiErrors(err.response || {})))
}

export const getBookings = rentalId => {
    return rentalAxios.get(`/bookings?rental=${rentalId}`)
        .then(res => res.data)
}

export const fetchUserBookings = () => dispatch => {
    dispatch({type: 'REQUEST_DATA', resource: 'manage-bookings'});
    return rentalAxios.get('/bookings/me')
        .then(res => res.data)
        .then(bookings => {
            dispatch({
                type: 'REQUEST_DATA_COMPLETE',
                data: bookings,
                resource: 'manage-bookings'
            })
        })
}

export const fetchReceivedBookings = () => dispatch => {
    dispatch({type: 'REQUEST_DATA', resource: 'received-bookings'});
    return rentalAxios.get('/bookings/received')
        .then(res => res.data)
        .then(bookings => {
            dispatch({
                type: 'REQUEST_DATA_COMPLETE',
                data: bookings,
                resource: 'received-bookings'
            })
        })
}