// This is the initial page for the website aka (The home page?)

import React from 'react';
import CustomCharts from '../components/CompanyChart'

const Landing = () => {
  return (
    <header className="">
      <div className="">
        <h1>This is the landing page</h1>
        <CustomCharts />
      </div>
    </header>
  );
};

export default Landing;