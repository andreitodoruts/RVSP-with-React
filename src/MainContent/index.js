import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

const MainContent = props => 
  <div className="main">
          <div>
            <h2>Invitees</h2>
            <ConfirmedFilter toggleFilter={props.toggleFilter}
                            isFiltered={props.isFiltered}/>
          </div>
          <Counter totalInvited={props.totalInvited} 
                   numberAttending={props.numberAttending} 
                   numberUnconfirmed={props.numberUnconfirmed}/>
          <GuestList guests={props.guests} 
                     toggleConfirmationAt={props.toggleConfirmation}
                     toggleEditingAt={props.toggleEditing}
                     setNameAt={props.setNameAt}
                     isFiltered={props.isFiltered}
                     removeGuestAt={props.removeGuestAt}
                     pendingGuest={props.pendingGuest}/>
        </div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  /** guests **/
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default MainContent;