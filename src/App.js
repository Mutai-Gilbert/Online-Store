import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Heels from './components/Heels';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/heels" element={<Heels />} />
      </Routes>
    </Router>
  );
}

export default App;
