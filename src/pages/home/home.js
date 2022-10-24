import AddToCart from '../../components/add-to-cart-btn/add_to_cart'
import './home.scss';
import Image from './dish-1.png';


function Home({data}) {

   return (
       <section className="home">
            <div className="container">
            <div className="content">
                   <span>{data.title}</span>
                   <h1>{data.productName}</h1>
                   <p>{data.discribtion}</p>

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
