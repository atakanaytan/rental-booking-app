
const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');
const { getRentals, 
        getRentalById, 
        createRental,
        getUserRentals, 
        deleteRental } = require('../controllers/rentals');


router.get('', getRentals);
router.get('/me', onlyAuthUser, getUserRentals);
router.get('/:rentalId', getRentalById);
router.post('', onlyAuthUser, createRental);

router.delete('/:rentalId', onlyAuthUser, deleteRental)
module.exports = router;