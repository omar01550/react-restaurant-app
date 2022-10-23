import './card.scss';
import AddToCart from '../add-to-cart-btn/add_to_cart';
import ProductImage from '../../images/dish-1.png';


function Card() {
    return (
         <div className="card">
                 <div className="overlay">
                     <div className="icon">
                         <i className="fa fa-heart"></i>
                     </div>
                 </div>
                 <img src={ProductImage} alt="not found" className="Product-image"/>
                 <h4 className="product-name">tasty food</h4>
                 <div className="rate">
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                 </div>

                 <div className="buy">
                      <span className="price">15,90</span>
                      <AddToCart/>
                 </div>
         </div>
    )
}


export default Card;
