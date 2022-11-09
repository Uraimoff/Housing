import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/properties' element={<h1>Home</h1>}/>
      <Route path='/Contact' element={<h1>Home</h1>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path='/' element={<Navigate to={"home"} />}/>
    </Routes>
    </>
  );
}

export default App;
