import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import ProductCard from './components/ProductCard/ProductCard';
import Machines from './pages/Machines/Machines';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Reserver from './pages/Reserver/Reserver';
import HeaderLogin from './components/HeaderLogin/HeaderLogin';
import { useEffect,useState } from 'react';
import BaseScreenAdmin from './pages/BaseScreenAdmin';
import BaseScreen from './pages/BaseScreen';
import DateAdmin from './pages/DateAdmin/DateAdmin';
import FlipperAdmin from './pages/FlipperAdmin/FlipperAdmin';
import CustomerAdmin from './pages/CustomerAdmin/CustomerAdmin';
import ImageAdmin from './pages/ImageAdmin/ImageAdmin';
import OrderAdmin from './pages/OrderAdmin/OrderAdmin';
import StatAdmin from './pages/StatAdmin/StatAdmin';
import FraisAdmin from './pages/FraisAdmin/FraisAdmin';



function App() {
  const [test,setTest]= useState('')
  fetch('http://joe.api//')
    .then(res=>res.text())
    .then(text=>setTest(text))
  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      {test}
      
      
      <Routes>
      <Route path="/" element={<BaseScreen/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/machines" element={<Machines/>}/>
        <Route path="/reservation" element={<Reserver/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>
      </Route>
      <Route path="/admninjosh" element={<BaseScreenAdmin/>}>
      <Route path="/admninjosh/date" element={<DateAdmin/>}/>
      <Route path="/admninjosh/flipper" element={<FlipperAdmin/>}/>
      <Route path="/admninjosh/customer" element={<CustomerAdmin/>}/>
      <Route path="/admninjosh/order" element={<OrderAdmin/>}/>
      <Route path="/admninjosh/image" element={<ImageAdmin/>}/>
      <Route path="/admninjosh/frais" element={<FraisAdmin/>}/>
      <Route path="/admninjosh/stat" element={<StatAdmin/>}/>

      </Route>
      </Routes>
      
    </div>
  );
}

export default App;
