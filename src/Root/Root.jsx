import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import useNotFound from '../hook/useNotFound';

const Root = () => {
    const [notfound, setNotFound] = useNotFound();
   
    return (
        <div>
            <Scroll></Scroll>
            <NavBar></NavBar>
           <div className='min-h-screen'>
           <Outlet context={[setNotFound]}></Outlet>
           </div>
          {!notfound&& <Footer></Footer>}
        </div>
    );
};

export default Root;