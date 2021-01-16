import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

const Search = () => {
    return (
       <Container >
           <h3 style={{textAlign:"center"}}> I GROW BY HELPING PEOPLE IN NEED</h3>
            <Form inline className="justify-content-center">
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
        </Form>
       </Container>
    );
};

export default Search;