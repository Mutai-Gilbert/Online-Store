import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './pages/home/Products';
import Heels from './pages/heels/Heels';
import Header from './components/Header';
import Dresses from './pages/Dresses/Dresses';
import Shoes from './pages/Shoes/Shoes';
import Fashion from './pages/Fashion/Fashion';
import Shorts from './pages/Shorts/Shorts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/heels" element={<Heels />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </Router>
  );
}

export default App;
