import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

//import de containers
import Tournaments from './Containers/Tournaments/Tournaments';
import Home from './Containers/Home/Home';
import Rank from './Containers/Rank/Rank';
import Login from './Containers/Login/Login';

//import containers tournaments
// import AllMatches from './Components/MatchesRoutes/AllMatches';
// import Bracket from './Components/MatchesRoutes/Bracket';
// import Upcoming from './Components/MatchesRoutes/Upcoming';
// import Finished from './Components/MatchesRoutes/Finished';


//import de components
import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer';


function App() {
  
    return (
      <div style={{backgroundColor: '#1b0f23'}}> 
          <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/rank' element={<Rank/>} />
                        <Route path='/tournaments' element={<Tournaments/>} />
                        <Route path='/login' element={<Login/>} />
                        {/* <Route path='/tournaments/allmatches' element={<AllMatches/>}/>
                        <Route path='/tournaments/bracket' element={<Bracket/>} />
                        <Route path='/tournaments/upcoming' element={<Upcoming/>} />
                        <Route path='/tournaments/finished' element={<Finished/>} /> */}
                    </Routes>
                <Footer />
          </BrowserRouter>

      </div>
  );
  
}

export default App;

