import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
