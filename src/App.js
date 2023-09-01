import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Attendance from './pages/Attendance';
import QRpage from './pages/QRpage';
import Class from './pages/Class';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />}/>
     <Route path="/signup" element={<Signup />}/>
     <Route path="/home" element={<Home />}/>
     <Route path ="/attendance" element={<Attendance />}/>
     <Route path ="/qr" element={<QRpage />}/>
     <Route path ="/class" element={<Class />}/>
     </Routes>
      </BrowserRouter>
  
  );
}

export default App;
