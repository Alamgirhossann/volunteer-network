import React, { useEffect, useState } from 'react';
import {  Card, Container,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const VolunteerWork = () => {
    const [volunteerWork, setVolunteerWork] = useState([])
    useEffect(() => {
        fetch('https://nameless-atoll-19374.herokuapp.com/volunteerEvent')
        .then(res=> res.json())
        .then(data=>{
            setVolunteerWork(data)
        })
        
    }, [])


    return (

        <Container>
            <Row>
                {
                    volunteerWork.map(workType =>
                        <Card style={{ width: '16rem', margin: '10px', }}>
                            <Link to='/registerForm'>
                                <Card.Img variant="top" src={workType.image} />
                                <Card.Body style={{ backgroundColor: 'tomato', color: 'white', textAlign: 'center' }}>
                                    <Card.Title>{workType.name}</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>)
                }
            </Row>
            
        </Container>


    );
};

export default VolunteerWork;