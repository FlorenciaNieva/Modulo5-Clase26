import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from './components/Count';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/count' element={<Count />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
