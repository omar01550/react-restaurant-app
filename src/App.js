import {React} from 'react';
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.scss'
import Navbar from './components/navbar/navbar';

import Home from './pages/home/home';
import Dishes from './pages/dishes/dishes';
import Menu from './pages/menu/menu';







function App() {

  return (
      <div className="App">
           <Navbar/>
           <main>
           <BrowserRouter>
               <Routes>
                      <Route path="" element={<Home/>}/>
                      <Route path="/dishes" element={<Dishes/>}/>
                      <Route path="/menu" element={<Menu/>}/>

               </Routes>
           </BrowserRouter>
           </main>

      </div>
  );
}

export default App;
