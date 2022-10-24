import {React} from 'react';
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.scss'
 import {useEffect,useState,createContext} from 'react';
 import Navbar from './components/navbar/navbar';
 import Home from './pages/home/home';
 import Dishes from './pages/dishes/dishes';
 import Menu from './pages/menu/menu';
 import CartPage from './pages/CartPage/CartPage';
 import Data from "./data.json";


const dataContext = createContext();

function App() {

    const [data,setData] = useState(Data[0])
    const [cartProducts,setCartProducts] = useState([]);

    useEffect(() => {

    })

  return (

      <div className="App">
      <BrowserRouter>
           <Navbar logo={data.logo}/>
        <main>

                   <Routes>
                         <Route path="/" element={<Home data={data.mainDishes[0]}/>}/>
                         <Route path="/menu" element={<Menu data={data.menuDishes} setCartProducts={setCartProducts} cartProducts={cartProducts}/>}/>
                         <Route path="/dishes" element={<Dishes data={data.menuDishes}/>}/>
                         <Route path="/cart" element={<CartPage data={cartProducts}/>}/>
                   </Routes>

         </main>
           </BrowserRouter>
      </div>

  );
}

export default App;
