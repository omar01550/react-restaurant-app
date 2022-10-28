import './CartPage.scss';
import {useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {useDispatch} from "react-redux";


function CartPage() {

   const data = useSelector(data => data[0].cartItems);
   const dispatch = useDispatch();
   const [countProducts,setCountProducts] = useState(1);

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
                               <tr>

                                   <td>
                                       <img src={require('../../images/dish-1.png')} alt="not found"/>
                                   </td>
                                   <td>
                                      <h3>{card.title}</h3>
                                      <p>{card.price}</p>

                                   </td>
                                   <td className="count">
                                      <button>-</button>
                                      <input type="number" value={countProducts}/>
                                      <button onClick={()=>{setCountProducts(countProducts+1)}}>+ </button>
                                   </td>
                                   <td className="total-price">
                                      {countProducts*card.price.toFixed(2)}
                                      <span>$</span>
                                   </td>

                                   <td className="">
                                      <button className="buy-now">buy now</button>
                                   </td>
                               </tr>
                           )
                        })}
                    </tbody>

              </table>
           </div>
       </section>
   )
}


export default CartPage;
