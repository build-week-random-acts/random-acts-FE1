import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserHomePage from './components/UserHomePage';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import Acts from './components/Acts';
import { ActsContext } from './contexts/ActsContext';
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';

import './styles.scss';

function App() {
  const [acts, setActs] = useState([]);
  const [contacts, setContacts] = useState([
    {
      id: 2,
      fname: 'Jose',
      lname: 'M',
      email: 'jose@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 3,
      fname: 'Brittany',
      lname: 'M',
      email: 'brittanyh@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 4,
      fname: 'Ben',
      lname: 'F',
      email: 'ben@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 5,
      fname: 'Brian',
      lname: 'M',
      email: 'brian@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 6,
      fname: 'Sara',
      lname: 'A',
      email: 'sara@mail.com',
      phone: '555-555-5555',
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get('https://bfeole-randomacts.herokuapp.com/contacts/contacts')
  //     .then(res => {
  //       console.log('res from contacts', res.data);
  //       setContacts(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get('https://bfeole-randomacts.herokuapp.com/quotes/quotes')
      .then(res => {
        // console.log('res from quotes', res.data);
        setActs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  let randomAct = acts[Math.floor(Math.random() * acts.length)];
  console.log('random act chosen', randomAct);

  let randomContact =
    contacts[Math.floor(Math.random() * contacts.length)].fname;
  console.log('random contact chosen', randomContact);

  return (
    <div>
      <Navbar randomAct={randomAct} randomContact={randomContact} />
      <Switch>
        <ActsContext.Provider
          value={{ acts, contacts, randomAct, randomContact }}
        >
          <div className='container'>
            <Route path='/login' component={LoginForm} />
          </div>
          <PrivateRoute path='/' exact component={UserHomePage} />
          <PrivateRoute path='/contacts' exact component={ContactList} />
          <PrivateRoute path='/acts' exact component={Acts} />
        </ActsContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
