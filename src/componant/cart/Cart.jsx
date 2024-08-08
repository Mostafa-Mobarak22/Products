import React from 'react'
import './Cart.css'
export default function Cart() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 col-md-6">
                    <div className="img">
                        <img src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png" className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="info">
                        <div className="title mb-5">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nobis omnis alias magni, nemo sed fuga sapiente aliquid? Sequi, blanditiis.</p>
                        </div>
                        <div className="price d-flex mb-5">
                            <h4 className='me-3'>$968</h4>
                            <h4 className='ms-3'>-98%</h4>
                        </div>
                        <div className="brand">
                            <span className='bg-success rounded-pill py-1 px-3 m-3  text-white'>In stock</span>
                            <p className='m-3'>More information</p>
                            <span className='bg-slate-300 rounded-pill py-2 px-3 m-3'>Category</span>
                            <span className='bg-slate-300 rounded-pill py-2 px-3 m-3'>Brand</span>
                        </div>
                        <div className="counter d-flex mx-3 my-5">
                            <div className='bg-slate-300 d-grid rounded-2'><i class="fa-solid fa-plus m-auto"></i></div>
                            <span className='fw-bold px-3'>20</span>
                            <div className='bg-slate-300 d-grid rounded-2'><i class="fa-solid fa-minus m-auto"></i></div>
                        </div>
                        <div className="btns d-flex my-5">
                            <button className='btn btn-outline-success d-block mx-3 rounded-pill px-3 py-2'>Buy Now</button>
                            <button className='btn btn-success d-block mx-3 rounded-pill px-3 py-2'>Add To Crat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
