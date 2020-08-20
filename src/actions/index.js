import { rentalData } from 'store/data';


export const fetchRentals = () => {
    return {
        type: 'FETCH_RENTALS',
        rentals: rentalData
    }
} 

export const createRental = rental => {
    return{
        type: 'CREATE_RENTALS',
        rental
    }
}

export const fetchRentalById = (rentalId) => {
    const rental = rentalData.find((rental) => rental._id === rentalId );

    return {
        type: 'FETCH_RENTALS_BY_ID',
        rental
    }
} 
