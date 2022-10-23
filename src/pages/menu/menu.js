import './menu.scss';
import Card from '../../components/card/card';

export default function Menu() {
  return (
      <section className="menu">
         <div className="container">
              <h3 className="first-title">Our Menu</h3>
              <h4 className="second-title">TODAY,S SPICIALITY</h4>

              <div className="cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>                     
              </div>
         </div>
      </section>
  )
}
