import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing/>} path='/'  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
