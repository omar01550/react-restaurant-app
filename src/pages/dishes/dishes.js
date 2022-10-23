import Card from '../../components/card/card';
import './dishes.scss';

export default function Dishes() {
     return(
         <section className="dishes">
              <div className="container">
                   <h2 className="first-title">Our Dishes</h2>
                   <h3 className="second-title">POPULAR DISHES</h3>

                   <div className="cards">
                         <Card/>
                         
                   </div>

              </div>
         </section>
     )
}
