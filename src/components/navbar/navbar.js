import {React} from 'react';
 import {Link } from "react-router-dom";
import './navbar.scss';

function Navbar({logo}) {


     function showNavMenu() {
         document.querySelector("header ul").classList.toggle("hidden");
     }

    return (
       <header>
            <nav className="container">
                 <h1 className="logo">{logo}</h1>
                 <ul className="">
                      <li>
                          <Link to='/'> home </Link>
                      </li>
                      <li>
                          <Link to='/dishes'> Dishes </Link>
                      </li>
                      <li>
                            <Link to='/menu'> menu </Link>
                       </li>

                 </ul>

                 <div className="icons">
                     <div className="icon .active">
                         <i className="fa fa-search"></i>
                     </div>
                     <div className="icon">
                         <i className="fa fa-bars" onClick={showNavMenu}></i>
                     </div>
                     <div className="icon">
                         <i className="fa fa-heart"></i>
                     </div>
                     <div className="icon">
                         <Link to="/cart">
                              <i className="fa fa-shopping-cart"></i>
                         </Link>



                     </div>



                 </div>
            </nav>


       </header>
    )
}


export default Navbar;
