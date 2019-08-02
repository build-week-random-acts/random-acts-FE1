//contain our links -> contacts, acts, about page info
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

class Navbar extends Component {
  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className='navbar'>
        <div className='img-container'>
          <img src={logo} alt='brand logo' />
        </div>
        <div className='navlinks'>
          {/* <Link to='/'>Home</Link> */}
          <Link className='navlink' to='/contacts'>
            My Contacts
          </Link>
          <Link className='navlink' to='/acts'>
            Random Acts
          </Link>
          <Link className='navlink' to='/randomizer' onClick={this.onOpenModal}>
            Generate an Act
            <Modal open={open} onClose={this.onCloseModal} center>
              <h3>The random act generated for you is: </h3>
              <p>{`The random act selected is ${this.props.randomAct}`}</p>
              <p>{`The person selected is ${this.props.randomContact}`}</p>
            </Modal>
          </Link>
          <Link
            className='navlink'
            onClick={() => {
              localStorage.removeItem('token');
              document.location.reload();
            }}
            to='/login'
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
