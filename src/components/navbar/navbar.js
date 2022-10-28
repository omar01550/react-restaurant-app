import {React} from 'react';
 import {Link,Routes,Rotue } from "react-router-dom";
import './navbar.scss';

function Navbar({logo,cartCount}) {

   function handelMenu() {
      let ul = document.querySelector("header ul");
      ul.classList.toggle("hidden")
   }
     function handelActive() {
       document.querySelectorAll("nav ul li a").forEach((li, i) => {
           li.onclick=function () {
                   document.querySelectorAll("nav ul li a").forEach((ele, i) => {
                       ele.classList.remove("active")   ;
                   });
               li.classList.add("active");
           }

       });
     }




    return (
       <header>
            <nav className="container">
                 <h1 className="logo">{logo}</h1>
                 <ul className="hidden">
                      <li>
                          <Link to='/' onClick={handelActive} className="active"> home </Link>
                      </li>
                      <li>
                          <Link to='/dishes' onClick={handelActive}> Dishes </Link>
                      </li>
                      <li onClick={handelActive}>
                            <Link to='/menu' onClick={handelActive}> menu </Link>
                       </li>

                 </ul>

                 <div className="icons">
                     <div className="icon .active">
                         <i className="fa fa-user"></i>
                     </div>
                     <div className="icon" onClick={handelMenu}>
                         <i className="fa fa-bars"></i>
                     </div>
                     <div className="icon">
                         <i className="fa fa-heart"></i>
                     </div>


                         <Link to="/cart" className="cart-icon icon">
                              <span>{cartCount}</span>
                              <i className="fa fa-shopping-cart"></i>
                         </Link>







                 </div>
            </nav>


       </header>
    )
}


export default Navbar;
