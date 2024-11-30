import React from 'react';
import Banner from './Banner';
import FirstSection from './FirstSection';
import TwoAdd from './TwoAdd';
import CardItem from './CardItem';

const Home1 = () => {
    return (
        <div className='text-2xl text-blue-700'>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <CardItem></CardItem>
            <TwoAdd></TwoAdd>
        </div>
    );
};

export default Home1;