import React from 'react';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import VolunteerWork from '../../Components/VolunteerWork/VolunteerWork';

const Home = () => {
    return (
        <>
            <Header></Header>
            <br/>
            <br/>
            <Search></Search>
            <br/>
            <br/>
            <VolunteerWork></VolunteerWork>
            
        </>
    );
};

export default Home;