import React, { useState ,useEffect,useContext} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { cartContext } from '../features/Context';


function ProductDisplay() {
  const {dispatch}=useContext(cartContext)
  const params = useParams();
    const [data, setData] = useState([]);
    

    useEffect(() => {
      const api =` https://fakestoreapi.com/products/${params.id}`;
      
      axios.get(api)
        .then((response) => {
          setData([response.data]);
          console.log(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <>
    <div>
        {data.map((details) => (
          <div className="p-10 space-y-6">
            <div>
            <img className="w-80 h-96 bg-gray-500" src={details.image} alt="" />
              <h1 className="text-xl font-semibold">{details.title}</h1>
              <p className="text-sm font-medium">{details.category}</p>
              <h2 className="font-semibold mt-3">${details.price}</h2>
              
              <p className="text-sm md:line-clamp-3 md:w-[50%]">{details.description}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">

              <button onClick={()=>dispatch({type:"Add",data:details})} className="text-white bg-black p-2 w-full text-center">Add to Cart</button> 
             
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductDisplay