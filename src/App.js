import {React} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useEffect,useState} from 'react';

import './App.scss';
import {Link,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Dishes from './pages/dishes/dishes';
import CartPage from './pages/CartPage/CartPage';


function App() {
   const data = useSelector(data => data[0] );
   const [cartProducts,setCartProducts] = useState([]);
     return (
       <div className="App">
       <BrowserRouter>
            <Navbar logo={data.logo}/>
            <main>
                 <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/dishes" element={<Dishes cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
                     <Route path="/cart" element={<CartPage data={cartProducts}/>}/>
                 </Routes>
            </main>
       </BrowserRouter>
       </div>
    )
}


export default App;
