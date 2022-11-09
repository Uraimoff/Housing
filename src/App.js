import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { navbar } from './utils/navbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Navbar/>}>
      {
        navbar.map((value)=>(
          <>
          <Route key={value.id} path={value.path} element={value.element}/>
          </>
        ))
      }
      </Route>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path='/' element={<Navigate to={"home"} />}/>
    </Routes>
    </>
  );
}

export default App;
