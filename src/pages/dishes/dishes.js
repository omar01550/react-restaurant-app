import Card from '../../components/card/card';
import './dishes.scss';
import {useSelector} from 'react-redux';
export default function Dishes({cartProducts,setCartProducts}) {
  const data = useSelector(data => data[0].menuDishes);
  console.log(data);
     return(
         <section className="dishes">
              <div className="container">
                   <h2 className="first-title">Our Dishes</h2>
                   <h3 className="second-title">POPULAR DISHES</h3>

                   <div className="cards">
                       {
                        data.map(ele =>{
                           return (
                              <Card data={ele} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
                           )
                        })
                       }
                   </div>

              </div>
         </section>
     )
}
