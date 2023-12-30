import React, { useState, Fragment } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

import './App.css'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, collegeName: uCollege, id: Math.random().toString() }];
    });

  }


  return (
    // <React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </>



    // </React.Fragment>
  )
}

export default App
