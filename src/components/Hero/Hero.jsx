import React from 'react';
import HeroBook from '../../../src/assets/pngwing 1.png'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={HeroBook}
      className="max-w-sm rounded-lg shadow-2xl "
    />
    <div>
      <h1 className="text-5xl font-bold mb-8">Books To Freshen Up <br /> Your Bookshelf</h1>
      <button className="btn btn-success">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Hero;