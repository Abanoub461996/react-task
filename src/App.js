// LAYOUTS
import RootLayout from './layouts/RootLayout';
import ErrorPage from './layouts/ErrorPage';
import GymLayout from './layouts/GymLayout';
//COMPONENTS
import HotDeals from './pages/HotDeals/HotDeals';
import Home from "./pages/Home/Home";
import GymDetails from "./pages/GymDetails/GymDetails";

// USER Components
import Login from './pages/User/Login';
import Register from './pages/User/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>} >
            <Route index="true" element ={<Home/>} />
            <Route path="/hotdeals"  element={<HotDeals/>} />
            
            <Route path="/gymdetails"  element={<GymLayout/>} >
            <Route index="true" element ={<Home/>} />
            <Route path=":id" element ={<GymDetails/>} />
          </Route>
            <Route path="/login" element ={<Login/>} />
            <Route path="/register" element ={<Register/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        
    </BrowserRouter>
    </>);
}

export default App;
