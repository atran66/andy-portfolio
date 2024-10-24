
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigationbar from './Navigationbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';


function App() {
  return (
    <BrowserRouter>
    <div className="App">      
      <Routes>      

          <Route path='/home' element={<Home/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>

      </Routes>
      <Navigationbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
