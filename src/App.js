import { Route, Routes } from 'react-router-dom';
import './App.css';
import Apod from './pages/Apod';
import Navbar from './components/Navbar';
import Tech from './pages/Tech';
import Home from './pages/Home';
import Mars from './pages/Mars';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tech' element={<Tech />}/>
        <Route path='/apod' element={<Apod />}/>
        <Route path='/mars' element={<Mars />}/>
      </Routes>
    </div>
  );
}

export default App;
