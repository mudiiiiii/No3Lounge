// 5xl3ay centennial survey
import React, {  useState, useEffect} from 'react'
import { Route, Routes , useLocation} from 'react-router-dom';
import Header from '../components/Header/Main';
import Home from '../components/Home/Main';
import Reservation from '../components/Reservation/Main';
import Application from '../components/Application/Main';
import Feedback from '../components/Feedback/Main';

function Index() {

    const [homepage, sethomepage] = useState(false)
      const location = useLocation();
      useEffect(() => {
        if (location.pathname === "/hometwo"){
          sethomepage(false)
        }else{
          sethomepage(true)
        }
      }, [location])
  
    const path = location.pathname
    useEffect(() => {
      window.scroll(0, 0)
  }, [path]);
  
    return (
      <>
        {homepage && <Header/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservation  />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/feedbacks" element={<Feedback />} />
        </Routes>
      </>
    )
  }
  
  export default Index