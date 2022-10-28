import {useState} from 'react';

function CartItem({card}) {

 const [countProducts,setCountProducts] = useState(1);
  return (
    <tr>

        <td>
            <img src={require('../../images/dish-1.png')} alt="not found"/>
        </td>
        <td>
           <h3>{card.title}</h3>
           <p>{card.price}</p>

        </td>
        <td className="count">
        <button>-</button>
        <input type="number" value={countProducts}/>
        <button onClick={()=>{setCountProducts(countProducts+1)}}>+ </button>
        </td>
        <td className="total-price">
           {countProducts*card.price.toFixed(2)}
           <span>$</span>
        </td>

        <td className="">
           <button className="buy-now">buy now</button>
        </td>
    </tr>
  )
}

export default Counter;
