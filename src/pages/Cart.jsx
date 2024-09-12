import React, { useContext ,useState} from 'react'
import { cartContext } from '../features/Context'
import { useParams } from 'react-router-dom';

function Cart() {
  const { cart ,dispatch} = useContext(cartContext)
  const [CartItems, setCartItems] = useState({})
  console.log(cart);

  const Ingrement = (itemId) => {
    if (!CartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }
  
  const Degrement = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
}


// const getTotalAmount = () => {
//   let totalAmount = 0


//   for (const item in CartItems) {
//       if (CartItems[item] > 0) {
//           let itemInfo = cart.find((product) => product.id === item);
//           totalAmount +=  CartItems[item]*itemInfo.price
//       }


//   }
//   return totalAmount
// }


  return (
    <div>



      <div className='p-5'>
        <div>
          <div className='cart-items-title  '>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            {/* <p>Remove</p> */}
          </div>
          <br />
          <hr />
          {
            cart.map((cartData) => (
              <div className='cart-items-title mt-4 '>
                <img className='w-[50px] md:w-[80px]' src={cartData.image} alt="" srcset="" />
                <p className=''>{cartData.category}</p>
                <p>${cartData.price}</p>
                <div className='flex justify-center items-center  border-2 w-[60px] h-[30px]  '>
                  <button onClick={()=>Degrement(cartData.id)} className='text-black p-3 text-[25px]'>-</button>
                  <p >{CartItems[cartData.id]}</p>
                  <button onClick={()=>Ingrement(cartData.id)} className='p-3  text-black text-[15px]'>+</button>
                </div>

                <p>{cartData.price * CartItems[cartData.id]}</p>
                {/* <button className='bg-red-700 p-2 text-white rounded'>Remove</button> */}

              </div>
              
            ))
          }

        </div>
    

      </div>

      
    </div>
  )
}

export default Cart
