import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './Login/Login';
import Products from './Products/Products';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
