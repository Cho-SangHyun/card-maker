import './app.css';
import Login from './components/login/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Maker from './components/maker/maker';

function App({FileInput, authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService}/>}/>
        <Route path="/maker" element={<Maker authService={authService} FileInput={FileInput}/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
