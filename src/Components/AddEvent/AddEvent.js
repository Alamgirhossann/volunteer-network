import React from 'react';
import { Button, Col, Form, Nav, Navbar, } from 'react-bootstrap';
import { makeStyles, MenuList, Typography } from '@material-ui/core';
import logo from '../../logos/logo.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '97%',

    },
});
const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const classes = useStyles();

    const onSubmit = data => {
        const eventInfo = { data }
        fetch('https://nameless-atoll-19374.herokuapp.com/volunteerEvents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Registration successfull')
                }
            })
    }
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
                <Typography style={{marginLeft:'5%', fontSize:'20px', fontWeight:'600'}} variant="inherit">Add Event</Typography>
            </Navbar>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
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
                <div style={{ width: '100%', height: '540px', borderLeft: '15px solid lightGray', borderTop: '15px solid lightGray', padding: '10px 10px' }}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Event Title" ref={register} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control name='date' type="date" placeholder="date" ref={register} required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name='description' type='text' Placeholder='Description' ref={register} required>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Banner</Form.Label>
                                <Form.Control name='image' type='file' ref={register} required>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </div>

    );
};

export default AddEvent;