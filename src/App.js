// import logo from './logo.svg';
import './App.css';
import FrontPage from './components/frontPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoon from './components/comingSoon';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='beyondoil' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
