
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../actions';
import { capitilize } from '../helpers/functions';

class RentalDetail extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.dispatch(fetchRentalById(id))
    }

    render() {
        const { rental } = this.props;

        return (
            <section id="rentalDetails">
              <div className="upper-section">
                <div className="row">
                    <div className="col-md-6">
                        <img src={rental.image} alt={rental.title} />
                    </div>
                    <div className="col-md-6">
                      <img src={rental.image} alt={rental.title}/>
                    </div>
                </div>
              </div>
          
                <div className="details-section">
                  <div className="row">
                    <div className="col-md-8">
                     <div className="rental">
                       <h2 className={`rental-type type-${rental.category}`}>
                           {rental.shared ? 'Shared' : 'Whole'} {rental.category}
                       </h2>
                       <h1 className="rental-title">{rental.title}</h1>
                       <h2 className="rental-city">{capitilize(rental.city)}</h2>
                        <div className="rental-room-info">
                            <span><i className="fa fa-building"></i>{rental.numOfRooms} bedrooms</span>
                            <span><i className="fa fa-user"></i>{rental.numOfRooms + 4} guests</span>
                            <span><i className="fa fa-bed"></i> {rental.numOfRooms + 2} beds</span>
                        </div>
                        <p className="rental-description">
                        {rental.description}
                        </p>
                        <hr/>
                         <div className="rental-assets">
                          <h3 className="title">Assets</h3>
                          <div className="row">
                            <div className="col-md-6">
                                <span>
                                  <FontAwesomeIcon icon="asterisk"/> Cooling
                                </span>
                                <span>
                                  <FontAwesomeIcon icon="thermometer"/> Heating
                                </span>
                                <span>
                                  <FontAwesomeIcon icon="location-arrow"/> Iron
                                </span>
                            </div>
                            <div className="col-md-6">
                                <span>
                                  <FontAwesomeIcon icon="desktop"/> Working area
                                </span>
                                <span>
                                  <FontAwesomeIcon icon="cube"/> Washing machine
                                </span>
                                <span>
                                  <FontAwesomeIcon icon="archive"/> Dishwasher
                                </span>
                            </div>
                        </div>
                       </div>
                      </div>
                     </div>
                   <div className="col-md-4"> BOOKING</div>
                </div>
            </div>
          </section> 
          
        )
    }
}

const mapStateToProps = ({rental}) => ({rental})

const RentalDetailWithRouter = withRouter(RentalDetail);

export default connect(mapStateToProps)(RentalDetailWithRouter);