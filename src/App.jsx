import React, { Suspense } from 'react';
import Banner from './Components/Banner';
import LoyarData from './Components/LoyarData';
import { useState, useEffect } from 'react';
import Service from './Components/Service';



const App = () => {

  const [lowyers, setLowyers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('Lowyar.json', {
      method: 'GET',
      cache: 'no-cache'
    })
      .then(res => res.json())
      .then(data => { setLowyers(data), setLoading(false) })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }
  return (
    <div>



      <Banner></Banner>
      <LoyarData lowyers={lowyers}></LoyarData>
      <Service></Service>

    </div>
  );
};

export default App;
