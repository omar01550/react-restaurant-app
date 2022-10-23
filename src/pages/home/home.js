import AddToCart from '../../components/add-to-cart-btn/add_to_cart'
import './home.scss';
import Image from './dish-1.png';


function Home() {
   return (
       <section className="home">
            <div className="container">
            <div className="content">
                   <span>our spisial dishes</span>
                   <h1>fried chicken</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi</p>

                   <AddToCart/>
             </div>

             <div className="images">
                 <img src={Image} alt="not found"/>
             </div>
            </div>

       </section>
   )
}

export default Home;
