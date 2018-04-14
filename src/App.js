import React, { Component } from 'react';
import './App.css';

import MainContent from './MainContent';
import Header from './Header';

class App extends Component {

  state = {
    currentGuest: 0,
    isFiltered: false,
    pendingGuest: "",
    guests: [
    ]
  }

  toggleFilter = () => 
    this.setState({
      isFiltered: !this.state.isFiltered
    })

  handleNameInput = e => {
    
    this.setState({
      pendingGuest: e.target.value
    });
  }

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      currentGuest: this.state.currentGuest + 1,
      guests: [

        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id: this.state.currentGuest
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  removeGuestAt = index => {
    console.log('removee',index);

    this.setState({

      guests: this.state.guests.filter(guest => index !== guest.id)

    })
  }


  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () =>
    this.state.guests.reduce((total,guest) => guest.isConfirmed ? total + 1 : total, 0)
  

  toggleGuestPropertyAt = (property, indexToChange) => 
    this.setState({

      guests: this.state.guests.map((guest,index) => {
        if(guest.id === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],

          }

        }
        return guest;
      })

    });

  toggleConfirmation = index => 
    this.toggleGuestPropertyAt('isConfirmed',index);

  toggleEditing = index =>
    this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name,indexToChange) =>
    this.setState({

      guests: this.state.guests.map((guest,index) => {
        if(guest.id === indexToChange) {
          return {
            ...guest,
            name

          }

        }
        return guest;
      })

    });


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header newGuestSubmitHandler={this.newGuestSubmitHandler}
                pendingGuest={this.state.pendingGuest}
                handleNameInput={this.handleNameInput} />
        <MainContent toggleFilter={this.toggleFilter}
                     isFiltered={this.state.isFiltered}
                     totalInvited={totalInvited}
                     numberAttending={numberAttending}
                     numberUnconfirmed={numberUnconfirmed}
                     guests={this.state.guests}
                     toggleConfirmation={this.toggleConfirmation}
                     toggleEditing={this.toggleEditing}
                     setNameAt={this.setNameAt}
                     removeGuestAt={this.removeGuestAt}
                     pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
