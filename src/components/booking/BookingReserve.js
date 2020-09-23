

import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';


class BookingReserve extends React.Component {


    constructor() {
        super();
        
        this.state = {
            proposedBooking: {
                guests: ''                
            }
        }
    }

    handleGuestsChange = (event) => {
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                guests: event.target.value
            }
        })
    }

    reserveRental = () => {
        alert(JSON.stringify(this.state.proposedBooking));
    }

    render() {
        return(
          <div className='booking'>
            <h3 className='booking-price'>$ 12 <span className='booking-per-night'>per night</span></h3>
            <hr></hr>
            <div className='form-group'>
              <label htmlFor='dates'>Dates</label>
              <DateRangePicker
                containerStyle={{display: 'block'}}>
                <input
                  id="dates"
                  type="text"
                  className="form-control">
                </input>
             </DateRangePicker>
            </div>
            <div className='form-group'>
                <label htmlFor='guests'>Guests</label>
                  <input
                   onChange={this.handleGuestsChange}
                    value={this.state.proposedBooking.guests} 
                    type='number'
                    className='form-control'
                    id='guests'
                    aria-describedby='guests'>
                    </input>
            </div>
            <button 
            onClick={this.reserveRental}
            className='btn btn-bwm-main btn-block'>Reserve place now</button>
            <hr></hr>
              <p className='booking-note-title'>People are interested into this house</p>
              <p className='booking-note-text'>
                  More than 500 people checked this rental in last month.
              </p>
          </div>
        )
    }
}

export default BookingReserve;