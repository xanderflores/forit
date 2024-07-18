import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import  UsuariosInfo from './components/UsuariosInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsuariosInfo></UsuariosInfo>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
