
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'aos/dist/aos.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
import Career from './Components/Careers/Career';
import Footer from './Components/Footer/footer';
import Aos from 'aos';


function App() {
  Aos.init();


  return (
   
  <BrowserRouter>
    <div className="App" >
    <Header/>
   <Routes>
    <Route path='/' element={ <Home/> } ></Route>
    <Route path='/about' element={ <About/> } ></Route>
    <Route path='/contact' element={ <Contact/> } ></Route>
    <Route path='/account' element={ <Account/> } ></Route>
    <Route path='/careers' element={ <Career/> }></Route>
   </Routes>
   <Footer/>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
