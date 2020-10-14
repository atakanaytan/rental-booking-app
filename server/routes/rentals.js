
const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');
const { getRentals, 
        getRentalById, 
        createRental,
        getUserRentals, 
        deleteRental,
        updateRental,
        verifyUser } = require('../controllers/rentals');


router.get('', getRentals);
router.get('/me', onlyAuthUser, getUserRentals);
router.get('/:rentalId', getRentalById);

router.get('/:rentalId/verify-user', onlyAuthUser, verifyUser)

router.post('', onlyAuthUser, createRental);

router.patch('/:rentalId', onlyAuthUser, updateRental);

router.delete('/:rentalId', onlyAuthUser, deleteRental)

module.exports = router;