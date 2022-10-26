import './card.scss';
import AddToCart from '../add-to-cart-btn/add_to_cart';
import ProductImage from '../../images/dish-1.png';


function Card({data,setCartProducts,cartProducts}) {



    return (
         <div className="card" id={data.id}>
                 <div className="overlay">
                     <div className="icon">
                         <i className="fa fa-heart"></i>
                     </div>
                 </div>
                 <img src={require("../../images/dish-1.png")} alt="not found" className="Product-image"/>
                 <h4 className="product-name">{data.title}</h4>
                 <div className="rate">
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                 </div>

                 <div className="buy">
                      <span className="price">{data.price}</span>
                      <AddToCart ele={data} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
                 </div>
         </div>
    )
}


export default Card;
