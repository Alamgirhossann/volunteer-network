import React, { useContext } from 'react';
import "./RegisterForm.css"
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import logo from '../../logos/logo.png';
import { useForm } from 'react-hook-form';
import { VolunteerContext } from '../../App';


const Registerform = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext)

    const onSubmit = data => {
        const userInfo = { ...loggedInUser, regInfo: data, orderTime: new Date() }
        fetch('https://nameless-atoll-19374.herokuapp.com/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               if (data) {
                   alert('Form submited successfully')
               }
            })
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
            <Form className='form-size' onSubmit={handleSubmit(onSubmit)}>
                <Form.Text className='text-size'>
                    Register as a Volunteer
                </Form.Text>
                <Form.Group className='input-size' controlId="formBasicName">
                    <Form.Control name='Name' defaultValue={loggedInUser.displayName} type="text" placeholder="Enter Full Name" ref={register} required/>
                </Form.Group>
                <Form.Group className='input-size' controlId="formBasicEmail">
                    <Form.Control name='Email' defaultValue={loggedInUser.email} type="email" placeholder="Enter Username or email" ref={register} required/>
                </Form.Group>
                <Form.Group className='input-size' controlId="date">
                    <Form.Control name='Date' type="date" placeholder="Enter Date" ref={register} required/>
                </Form.Group>
                <Form.Group className='input-size' controlId="description">
                    <Form.Control name='Description' type="text" placeholder="Description" ref={register} />
                </Form.Group>
                <Form.Group className='input-size' controlId="event">
                    <Form.Control name='Event' type="text" placeholder="Enter event" ref={register} required/>
                </Form.Group>
                <Button className='button-size' variant="primary" type="submit">Submit</Button>
            </Form>
           
        </Container>
    );
};

export default Registerform;