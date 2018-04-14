import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props => 
	<form onSubmit={props.submitHandler}>
          <input type="text" 
          	 	 value={props.pendingGuest} 
                 onChange={props.inputHandler} 
                 placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">Submit</button>
      </form>

GuestInputForm.propTypes = {
	guest: PropTypes.string.isRequired,
	inputHandler: PropTypes.func.isRequired,
	submitHandler: PropTypes.func.isRequired
}

export default GuestInputForm;