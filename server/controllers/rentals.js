
const rentals = [
    {
        _id: '1434341',
        city: 'New York',
        title: 'Very Nice'
    },
    {
        _id: '12131',
        city: 'Berlin',
        title: 'The place where i did a erasmus'
    }
]


exports.getRentals = (req, res) => {
    return res.json(rentals);
}

exports.getRentalById = (req, res) => {
    const { rentalId } = req.params;
    const rental = rentals.find(r => r._id === rentalId);

    return res.json(rental)
}

exports.createRental = (req,res) => {
    const rentalData = req.body;
    rentals.push(rentalData);

    return res.json({message: `Rental with id: ${rentalData._id} was added!`});
}

exports.deleteRental = (req, res) => {
    const { id } = req.params;
    const rentalIndex = rentals.findIndex(r => r._id === id);
    
    rentals.splice(rentalIndex, 1);
    return res.json({message: `Rental with id ${id} was removed!`});
}

exports.updateRental = (req, res) => {
    const { id } = req.params;
    const rentalToUpdate = req.body;
    const rentalIndex = rentals.findIndex(r => r._id === id);
    
    rentals[rentalIndex].city = rentalToUpdate.city;
    rentals[rentalIndex].title = rentalToUpdate.title;
    
    return res.json({message: `Rental with id ${id} was updated!`});
}