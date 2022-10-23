import {React} from 'react';
 import {Link} from 'react-router-dom';
import './navbar.scss';

function Navbar() {

     function showNavMenu() {
         document.querySelector("header ul").classList.toggle("hidden");
     }

    return (
       <header>
            <nav className="container">
                 <h1 className="logo">Resto</h1>
                 <ul className="">
                      <li>
                          Home
                      </li>
                      <li>dishes</li>
                      <li>menu</li>
                      <li>about</li>
                      <li>preview</li>
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
                         <i className="fa fa-shopping-cart"></i>
                     </div>



                 </div>
            </nav>
       </header>
    )
}


export default Navbar;
