import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import ProductCard from './components/ProductCard/ProductCard';
import Machines from './pages/Machines/Machines';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Machines/>
      <Footer/>
    </div>
  );
}

export default App;
