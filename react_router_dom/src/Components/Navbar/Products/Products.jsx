import React from 'react'
import data from './data'
import './Products.css'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div id="products_container">
      {data.products.map((pro,index)=>{
        console.log(pro)
        return(
            <div id="product" key={index}>
                <img src={pro.thumbnail}/>
                <h3>{pro.title}</h3>
                <p>{pro.price} /-</p>
                {/* <Link to={/products/reviews/${pro.id}}><button>Reviews</button></Link> */}
            </div>
        )
      })}
    </div>
  )
}

export default Products