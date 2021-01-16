import React, { useContext, useEffect } from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import googleLogo from '../../logos/googleLogo.png';
import logo from '../../logos/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { firebaseConfig } from '../../firebase.config';
import { VolunteerContext } from '../../App';



const SignIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext)
    useEffect(() => {
        const verifyEmail = JSON.parse(sessionStorage.getItem('UserInfo'))
        setLoggedInUser(verifyEmail)

    }, [])
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res);
                const { displayName, email } = res.user;
                const newUser = { displayName, email };
                setLoggedInUser(newUser);
                sessionStorage.setItem('UserInfo', JSON.stringify(res.user))
                JSON.parse(localStorage.getItem('UserInfo'))
                history.replace(from);

            }).catch(error => {
                console.log(error);
            });
    }


    return (
        <Container>
            <Navbar className="justify-content-center" style={{ marginTop: '15px' }}>
                <Navbar.Brand to="/home">
                    <img
                        src={logo}
                        width="130"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Form style={{ height: '300px', width: '50%', border: '1px solid lightGray', backgroundColor: 'white', textAlign: 'center', margin: '5% 25% 0% 25%', paddingTop: '8%', paddingBottom: 'auto' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '20', fontWeight: '600' }}>Login With</Form.Label>
                    <br />

                    <Button onClick={handleGoogleSignIn} variant="secondary" style={{ width: '90%', borderRadius: '30px' }}><img style={{ width: '25px' }} src={googleLogo} alt="" /> Continue with google</Button>

                    <Form.Text>
                        Don't have an account? <span style={{ color: 'blueviolet' }}>create an account.</span>
                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SignIn;