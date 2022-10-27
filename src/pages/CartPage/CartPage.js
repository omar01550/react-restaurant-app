import './CartPage.scss';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from "react-redux";


function CartPage() {

   const data = useSelector(data => data[0].cartItems);
   const dispatch = useDispatch();

   function removeItemFromCart(e) {
        dispatch({
          type:"removeItemFromCart",
          id:e.target.parentNode.parentNode.id
        })
   }

   return (
       <section className="CartPage">
           <h1 className="second-title">Buy Now</h1>

           <div className="conatiner">
              <div className="cards">
                    {data.map(card =>{
                       return (

                         <div className="cart" id={card.id}>
                              <h2>r{card.title}</h2>
                              <p className="price">{card.price}</p>
                              <div className="btns">
                                  <button>Buy Now</button>
                                  <button onClick={removeItemFromCart}>remove from cart</button>
                              </div>
                         </div>

                       )
                    })}





              </div>
           </div>
       </section>
   )
}


export default CartPage;
