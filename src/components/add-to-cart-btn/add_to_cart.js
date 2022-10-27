import './add_to_cart.scss';
import {useDispatch} from 'react-redux';


function AddToCart({ele,setCartProducts,cartProducts}) {

   const dispatch = useDispatch();

    function addItemToCart() {
         dispatch({
              type:"ADDITEM",
              payload:ele

         });

    }
    return (
       <button onClick={addItemToCart} className="add-to-cart">Add To Cart</button>
    )
}


export default AddToCart;
