import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Error from './component/Error';
import Home from './component/Home';
import Movies from './component/Movies';
import Singlemovie from './component/Singlemovie';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='movie/:id' element={<Singlemovie/>}/>
       <Route  path='/movie' element={<Movies/>}/> 
      <Route  path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
