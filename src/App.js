import { BrowserRouter,Routes, Route } from 'react-router-dom';
import principal from './components/principal';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<principal></principal>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
