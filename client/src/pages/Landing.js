// This is the initial page for the website aka (The home page?)

import React, { useState } from 'react';
import CustomCharts from '../components/CompanyChart'
import Searchbar from '../components/Searchbar';

const Landing = () => {
  const [data, setData] = useState('');
  const passToParent = (childData) => {
    setData(childData);
  }
  return (
    <header className="">
      <div className="">
        <h1>This is the landing page</h1>
        <p>This is the search query: {data}</p>
        <Searchbar passToParent={passToParent}/>
        <CustomCharts />
      </div>
    </header>
  );
};

export default Landing;