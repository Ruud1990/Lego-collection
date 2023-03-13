import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Sets from './pages/Sets';
import Update from './pages/Update';
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sets/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
