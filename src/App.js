import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';


function App() {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<Success />} />
      <Route />
    </Routes>
  );
}

export default App;
