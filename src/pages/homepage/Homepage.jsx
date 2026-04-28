import React from 'react';
import Hero from '../../components/Hero/Hero';
import AllBooks from '../../components/Hero/AllBooks/AllBooks';

const Homepage = () => {
    return (
        <div>
          <Hero/>
          <AllBooks></AllBooks>
        </div>
    );
};

export default Homepage;