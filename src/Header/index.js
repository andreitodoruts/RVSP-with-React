import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
	<header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm guest={props.pendingGuest}
					  inputHandler={props.handleNameInput}
					  submitHandler={props.newGuestSubmitHandler}/>
    </header>


Header.propTypes = {
	newGuestSubmitHandler: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired,
	handleNameInput: PropTypes.func.isRequired
};

export default Header;