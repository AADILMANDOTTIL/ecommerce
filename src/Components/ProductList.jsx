
import React, { useState, useEffect,  useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { cartContext } from '../features/Context.jsx';



function ProductList() {
    const {dispatch}=useContext(cartContext)
   
    const [data, setData] = useState([]);

    useEffect(() => {
        const api = "https://fakestoreapi.com/products";

        axios.get(api)
            .then((response) => {
                setData(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <>
            <h1 className='text-center text-4xl p-5 font-bold'>Product List</h1>
            <div className='w-[100%] p-5 h-auto flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center'>
                {
                    data.map((data) => (
                        <Link to={`/product/${data.id}`}>

                            <div className='w-[280px] h-[320px] rounded  bg-slate-700'>
                                <img className='w-[100%] h-[200px] p-3' src={data.image} alt="" srcset="" />
                                <div className='text-white p-4 flex justify-between'>
                                    <div>
                                        <h1>{data.category}</h1>
                                        <h1>${data.price}</h1>
                                    </div>
                                  
                                    <div className='flex justify-start pl-2 items-center'>
                                    <Link to={'/'}>
                                            <button onClick={()=>dispatch({type:"Add",data:data})}className='w-auto h-auto bg-white p-2 text-center text-black'>Add to Cart</button>  
                                    </Link>

                                    </div>
                                </div>
                            </div>
                            </Link>
                            

                    ))
                }



            </div>
        </>
    )
}

export default ProductList