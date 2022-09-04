import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ContactForm/>
    </div>
  );
}

export default App;
