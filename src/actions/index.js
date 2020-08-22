
import axios from 'axios';


export const fetchRentals = () => dispatch => {
    axios.get('/api/v1/rentals')
      .then(res => {
        const rentals = res.data;
        dispatch({
            type: 'FETCH_RENTALS',
            rentals
        });
    })
}

export const createRental = rental => {
    return{
        type: 'CREATE_RENTALS',
        rental
    }
}

export const fetchRentalById = rentalId => dispatch => {
    axios.get(`/api/v1/${rentalId}`)
        .then(res => {
            const rental = res.data;
            dispatch({
                type: 'FETCH_RENTAL_BY_ID',
                rental    
           });
        })
} 
