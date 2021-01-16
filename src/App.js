import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Registerform from './Components/RegisterForm/Registerform';
import SuccessRegistration from './Components/SuccessRegistration/SuccessRegistration';
import VolunteerRegList from './Components/VolunteerRegList/VolunteerRegList';
import AddEvent from './Components/AddEvent/AddEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

export const VolunteerContext = createContext();

function App() {

 const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <VolunteerContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/signIn'>
          <SignIn></SignIn>
        </Route>
        <PrivateRoute path='/registerForm'>
          <Registerform></Registerform>
        </PrivateRoute>
        <Route path='/successRegister'>
          <SuccessRegistration></SuccessRegistration>
        </Route>
         <Route path='/volunteerRegList'>
          <VolunteerRegList></VolunteerRegList>
        </Route>
        <Route path='/addEvent'>
          <AddEvent></AddEvent>
        </Route>
      </Switch>
    </Router>
    </VolunteerContext.Provider>
  );
}

export default App;
