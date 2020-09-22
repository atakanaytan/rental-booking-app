

const Booking = require('../models/booking');

exports.createBooking = (req, res) => {
   const bookingData = req.body;
   const booking = new Booking({...bookingData, user: res.locals.user});

   Booking.find({rental: booking.rental}, (error, rentalBookings) => {
      if (error) { return res.mongoError(error); }

      const isValid = checkIfBookingIsValid(booking);
      if (isValid) {

         booking.save((error, savedBooking) => {
            if (error) { return res.mongoError(error); }
            
            return res.json({startAt: savedBooking.startAt, endAt: savedBooking.endAt})
         })
      } else {
         return res.json({message: 'Booking is not created!'});
      }
   })

    
}

function checkIfBookingIsValid(booking) {
   return true;
}

