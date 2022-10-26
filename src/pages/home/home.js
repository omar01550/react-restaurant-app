import AddToCart from '../../components/add-to-cart-btn/add_to_cart'
import './home.scss';
import {useSelector} from 'react-redux';

function Home() {

   return (

          <section className="home">
              <div className="over-lay"></div>
               <div className="container">
                    <div className="content">
                        <span>Our spicial dish</span>
                        <h1>Spicy Noodles</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                        <AddToCart/>
                    </div>
                    <div className="images">
                       <img src={require('../../images/home-img-1.png')}/>
                    </div>
              </div>
          </section>

   )
}

export default Home;
