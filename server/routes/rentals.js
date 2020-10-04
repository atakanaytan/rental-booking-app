
const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');
const { getRentals, 
        getRentalById, 
        createRental,
        getUserRentals } = require('../controllers/rentals');


router.get('', getRentals);
router.get('/me', onlyAuthUser, getUserRentals);
router.get('/:rentalId', getRentalById);
router.post('', onlyAuthUser, createRental);

module.exports = router;