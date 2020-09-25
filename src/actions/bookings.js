
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