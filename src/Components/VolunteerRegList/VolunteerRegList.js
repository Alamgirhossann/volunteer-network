import { makeStyles, MenuItem, MenuList, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'


const useStyles = makeStyles({
  root: {
    width: '97%',
  },
});
const VolunteerRegList = () => {

  const [registeredUser, setRegisteredUser] = useState([])
  useEffect(() => {
    fetch('https://nameless-atoll-19374.herokuapp.com/registeredEvent', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setRegisteredUser(result)
      })
  }, [])

  const handleDelete = (event, id) => {
    fetch(`https://nameless-atoll-19374.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          event.target.parentNode.style.display = 'none'
        }
      })
  }

  const classes = useStyles();
  return (
    <div>
      <Navbar style={{ marginTop: '15px' }}>
        <Navbar.Brand to="/home">
          <img
            src={logo}
            width="130"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Typography style={{ marginLeft: '5%', fontSize: '20px', fontWeight: '600' }} variant="inherit">Volunteer Register List</Typography>
      </Navbar>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%', height: '540px' }}>
          <div className={classes.root}>
            <MenuList>
              <Link to='/volunteerRegList'>
                <Typography variant="inherit">Volunteer Register List</Typography>
              </Link>
              <br/><br/>
              <Link to='/addEvent'>
                <Typography variant="inherit">Add Event</Typography>
              </Link>
            </MenuList>
          </div>
        </div>
        <div style={{ width: '100%', borderLeft: '15px solid lightGray', borderTop: '15px solid lightGray' }}>
          {
            registeredUser.map(users => <><ul>Name: {users.displayName} Email: {users.email} Registering Date: {users.regInfo.Date} Event: {users.regInfo.Event}</ul><button onClick={() => handleDelete(users._id)}>Delete</button></>)
          }
        </div>
      </div>

    </div>
  );
};

export default VolunteerRegList;