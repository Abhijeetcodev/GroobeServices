import './index.css'
import {Navbar,Footer} from './Components'
import { Route, Routes } from 'react-router-dom';
import {Home} from './Pages'

function App() {
  return (
    // <div className="relative sm:-8 p-4  min-h-screen">
    // <div className="flex-1 max-sm:w-full max-w-full mx-auto sm:pr-2">
      <div>
      <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />        
      </Routes>
    </div>
    
    <Footer/>
   
  </div>
  );
}

export default App;
