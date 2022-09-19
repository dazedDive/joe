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
      <HeaderLogin/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/machines" element={<Machines/>}/>
        <Route path="/reservation" element={<Reserver/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>

        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
