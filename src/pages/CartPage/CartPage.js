import './CartPage.scss';
import {useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {useDispatch} from "react-redux";
import CartItem from './cartItem';


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
              <table className="cards">
                    <thead>
                          <tr>
                                <td>
                                   product image
                                </td>

                                <td>
                                    product details
                                </td>

                                <td>
                                    quiantiity
                                </td>

                                <td>
                                    product price
                                </td>

                                <td>

                                </td>


                          </tr>
                    </thead>
                    <tbody>
                        {data.map(card =>{
                           return (
                               <CartItem data={card}/>
                           )
                        })}
                    </tbody>

              </table>
           </div>
       </section>
   )
}


export default CartPage;
