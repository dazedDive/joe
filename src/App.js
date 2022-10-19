import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import Error from './pages/Error/Error';

import Machines from './pages/Machines/Machines';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';


import BaseScreenAdmin from './pages/BaseScreenAdmin';
import BaseScreen from './pages/BaseScreen';
import DateAdmin from './pages/DateAdmin/DateAdmin';
import FlipperAdmin from './pages/FlipperAdmin/FlipperAdmin';
import CustomerAdmin from './pages/CustomerAdmin/CustomerAdmin';
import ImageAdmin from './pages/ImageAdmin/ImageAdmin';
import OrderAdmin from './pages/OrderAdmin/OrderAdmin';
import StatAdmin from './pages/StatAdmin/StatAdmin';
import FraisAdmin from './pages/FraisAdmin/FraisAdmin';
import FlipperAdminEdit from './pages/FlipperAdminEdit/FlipperAdminEdit';
import DateSelector from './components/DateSelector/DateSelector';
import RegisterPage from './pages/CreationPage/RegisterPage';
import RegisterPassPage from './pages/RegisterPass/RegisterPassPage';
import ResetPassPage from './pages/ResetPassPage/ResetPassPage';
import DistanceCalculator from './components/DistanceCalculator/DistanceCalculator';
import Payement from './components/payement/Payement';
import FlipperAdminAdd from './pages/FlipperAdminAdd/FlipperAdminAdd';
import { AuthContext} from '../src/contexts/AuthContext'
import { useContext } from 'react';
///

function App() {
  const {auth} = useContext(AuthContext)
  return (
    <div className="App">
      
      
      
      <Routes>
      <Route path="/" element={<BaseScreen/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/machines" element={<Machines/>}/>
        <Route path="/creation" element={<RegisterPage/>}/>
        {auth.result==0 &&
        <Route path="/creation/password/:token" element={<RegisterPassPage/>}/>}
        {auth.result==0 &&
        <Route path="/reset/password/:token" element={<ResetPassPage/>}/>}
         {auth.result==0 &&
        <Route path="/reservation" element={<RegisterPage/>}/>}
        {auth.result==1 &&
        <Route path="/reservation" element={<DateSelector/>}/>}
        <Route path="/reservation/second" element={<DistanceCalculator/>}/>
        <Route path="/reservation/final" element={<Payement/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>
      </Route>
      
      {auth.admin===1 &&
      <Route path="/admninjosh" element={<BaseScreenAdmin/>}>
      <Route path="/admninjosh/date" element={<DateAdmin/>}/>
      <Route path="/admninjosh/flipper" element={<FlipperAdmin/>}/>
      <Route path="/admninjosh/flipperAdd" element={<FlipperAdminAdd/>}/>
      <Route path="/admninjosh/flipper/:id" element={<FlipperAdminEdit/>}/>
      <Route path="/admninjosh/customer" element={<CustomerAdmin/>}/>
      <Route path="/admninjosh/order" element={<OrderAdmin/>}/>
      <Route path="/admninjosh/image" element={<ImageAdmin/>}/>
      <Route path="/admninjosh/frais" element={<FraisAdmin/>}/>
      <Route path="/admninjosh/stat" element={<StatAdmin/>}/>
      </Route>}
      </Routes>
      
    </div>
  );
}

export default App;
