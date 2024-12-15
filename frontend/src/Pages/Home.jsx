import React from 'react';
import { Outlet } from 'react-router-dom';  // This will render the dynamic content
import SideBar from '../components/SideBar';
import "../styles/Home.css"
function Home() {
  return (
    <div className='main'>
      <SideBar />
      <div className="content">
        <Outlet />  {/* Dynamic content will be rendered here like dashboard and expense*/}
      </div>
    </div>
  );
}

export default Home;
