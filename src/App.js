import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
