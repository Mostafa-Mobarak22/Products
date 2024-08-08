import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Cart from '../cart/Cart'
import { NavLink } from 'react-router-dom'
export default function Home() {

  const [allProducts,setAllProducts] = useState([])

  useEffect(()=>{
    getProduct()
    console.log(allProducts)
  })

  function stock(stock){
    if(stock===0){
      return <>
        <span className='bg-danger position-absolute top-0 start-0 rounded-pill py-0 px-2 m-2 text-white'>Out of stock</span>
      </>
    }
    else{
      return <>
        <span className='bg-success position-absolute top-0 start-0 rounded-pill py-0 px-2 m-2 text-white'>In stock</span>
      </>
    }
  }

  function rating(rating){
    let stars = []
    if((rating-Math.trunc(rating))===0){
      for(let i=1;i<=rating;i++){
        stars.push(i)
      }
      return <>
        {
          stars.map(()=>{
            return<i class="fa-solid fa-star text-success"></i>
          })
        }
      </>
    }else{
      let newRtaing = Math.trunc(rating)
      for(let i=1;i<=newRtaing+1;i++){
        stars.push(i)
    }
    return <>
        {
          stars.map((star,index)=>{
            if(star===newRtaing+1){
              return <i class="fa-regular fa-star-half-stroke text-success"></i>
            }
            else{
              return<i class="fa-solid fa-star text-success"></i>
            }
          })
        }
      </>
  }}

  function button(index){
    if(index%2===0){
      return <button className='btn btn-outline-success d-block mx-3 rounded-pill px-3 py-2'>Add To Crat</button>
    }
    else{
      return <button className='btn btn-success d-block mx-3 rounded-pill px-3 py-2'>Add To Crat</button>
    }
  }

  async function getProduct() {
    let {data}  = await axios.get("https://dummyjson.com/products?limit=0")
    setAllProducts(data.products)
  }

  return <>
    <div className="container py-5">
      <div className="row gy-5">
        {
          allProducts.map((product,index)=>{
            return <>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
                <div className="image bg-light position-relative rounded-3 mb-4 shadow">
                  <NavLink to='/cart'><img src={product.thumbnail} className='w-100' alt="" />
                  {stock(product.stock)}</NavLink>
                </div>
                <h3 className='line-clamp-1'>{product.title}</h3>
                <p className='line-clamp-2'>{product.description}</p>
                <div className="d-flex justify-content-between mb-3">
                  <span className='fw-bold'>${product.price}</span>
                  <span className=''>{rating(product.rating)}</span>
                </div>
                {button(index)}
              </div>
            </>
          })
        }
      </div>
    </div>
  </>
}
