
import { Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Inicio from './inicio';
import Productos from './productos';
import EndPage from './endpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path='/' element={< Inicio/>}/>
         <Route path='productos' element={< Productos/>}/>
         <Route exect path='/endpage' element={< EndPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
