import './add_to_cart.scss';


function AddToCart({ele,setCartProducts,cartProducts}) {

    function addItemToCart() {
         let x={content:"product1",id:89859894,price:9.3};
          setCartProducts([...cartProducts,x]);
    }
    return (
       <button onClick={addItemToCart} className="add-to-cart">Add To Cart</button>
    )
}


export default AddToCart;
