import './add_to_cart.scss';


function AddToCart() {

    function addItemToCart() {
       console.log(true);
    }
    return (
       <button onClick={addItemToCart}>Add To Cart</button>
    )
}


export default AddToCart;
