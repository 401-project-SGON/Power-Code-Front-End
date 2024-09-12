import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => (
  <div>
    <h1>POWER CODE</h1>
    <p>Learn the technical skills you need for the job you want.</p>
    <Link to="/about">Learn more</Link>
  </div>
);


export default HomePage;