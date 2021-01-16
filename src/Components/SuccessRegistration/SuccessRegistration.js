import React, { useContext, useEffect, useState } from 'react';
import './SuccessRegistration'
import { Button, Card, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VolunteerContext } from '../../App';
import image from '../../images/extraVolunteer.png'
import logo from '../../logos/logo.png';
const SuccessRegistration = () => {
    const [registeredEvent, setRegisteredEvent] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext)
    console.log(loggedInUser);
    useEffect(() => {
       
        fetch('https://nameless-atoll-19374.herokuapp.com/registeredUser?email='+loggedInUser.email,{
            method:'GET',
            headers: { 'Content-Type': 'applicaton/json',
        
        }
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data,);
                setRegisteredEvent(data)
            })
    }, [])

    const handleDelete = ( id) => {
        fetch(`https://nameless-atoll-19374.herokuapp.com/delete/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
      }


    return (
        <Container>
            <Navbar className="justify-content-between" expand="lg">
                <Navbar.Brand to="/home" >
                    <img
                        src={logo}
                        width="130"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{textAlign:"right"}}> */}
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Link className='link-style' to="/home">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='link-style' eventKey="/donation">Donation</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='link-style' eventKey="/events">Events</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='link-style' eventKey="/blogs">Blogs</Link>
                    </Nav.Item>
                    <Link >{loggedInUser.displayName}</Link>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
            <Row md={4}>

                {
                    loggedInUser.email ? registeredEvent.map(postEvent =>
                        <Card style={{ width: '16rem', margin: '10px' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Humanity More</Card.Title>
                                <Card.Text>
                                    {postEvent.regInfo.Date}
                                </Card.Text>
                                <Button onClick={()=>handleDelete(postEvent._id)} variant="primary">Cancle</Button>
                            </Card.Body>
                        </Card>
                    ) : <h5>You are not loggedin. Please select an event, login then register for any events.<a href='/home'>Register Here</a></h5>

                }
            </Row>
        </Container>
    );
};

export default SuccessRegistration;