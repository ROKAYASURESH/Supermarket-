import React from 'react'
import {  Link } from "react-router-dom";
const Product=[
    {
        id:1,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc6-320x320.png"
    },
    {
        id:2,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p3-1-320x320.png"
    },
    {
        id:3,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc-320x320.png"
    },
    {
        id:4,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/bath-handwash-320x320.png"
    },
    {
        id:5,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc1-1-320x320.png"
    },
    {
        id:6,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-3-320x320.png"
    },
    {
        id:7,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-2-320x320.png"
    },
    {
        id:8,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-6-320x320.png"
    },
    {
        id:9,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/product22-320x320.png"
    },
    {
        id:10,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p8-1-320x320.png"
    },
    {
        id:11,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p11-320x320.png"
    },
    {
        id:12,
        name:"Alesuada fames ac turpis",
        Price:"$1,90000",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc3-320x320.png"
    },

]

const Product1=[
    {
        id:1,
        name:"Etiam rhoncus mi id augue",
        price:"$1,7838.00",
        imgae1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/product24-320x320.png"
    },
    {
        id:2,
        name:"Dinning Table",
        price:"$1,900.00",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/New-Project-16-1.png"
    },
    {
        id:3,
        name:"Sofa 3",
        price:"$3,0033.0",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p1-1.png"
    },
    {
        id:4,
        name:"Chari 5",
        price:"$800.00",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/product22-320x320.png"
    },
    {
        id:5,
        name:"Tea Table",
        price:"2,000.000",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p8-1-320x320.png"
    }
]

export default function Shop() {
  return (
    <div className=''>
        <div className="container-fluid  bg-">
            <div className="row">
                <div className="col-lg-4">
                    <h6>Filter by price</h6>
                    <input type="range" name="price" value="90" />
                    <div className="price">Price: $2,800</div>
                    <div className="col-lg-12 bg-danger text-center "><button type="button" class="btn btn-danger btn-sm">Small button</button></div>
                    <div className="row">
                        <div className="col-lg-12 text-center"><img className='bg-info mt-3 az box2 ' src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/New-Project-16-1-320x320.png" alt="" /></div>
                    </div>
                    <div className="col-lg-12 text-center"> <h3>Etiam rocjjj miid jid</h3>
                    <p>$94,333</p></div>
                    <br />
                    <br />
                    <h6>Popular Product</h6>
                    <div className="row">
                        <div className="col-lg-4">
                            {Product1.map((rt)=>(
                                <div className="col-lg-12 ">
                                    <img className='bg-info mt-2 box2 ' src={rt.image1} alt="" width="100%"/>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-8">
                            {Product1.map((tt)=>(
                                <div className="col-lg-12"><br/><br/>
                                   <p className='bg-info ht'>
                                   <span></span>{tt.name}</p>
                                   <Link to={`/PopularProduct/${tt.id}`}>    <p className='bg-info '>{tt.price}</p></Link> 
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8">
                    <h5>Shop</h5>
                    Showing 1–16 of 55 results
Default sorting

                    <div className="row">
                        {Product.map((r)=>(
                            <div className="col-lg-3">
                                <img className=' bo  ht' src={r.image} alt="" width="100%"/>
                                <Link className='un target="_blank"' to={`/shops/${r.id}`}>   <p>{r.name}</p></Link> 
                                {r.Price}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
{/* <div className='col-lg-3 mx-5'>
        <h1>Product</h1>
        <div class="row"> 
          <div className='col-lg-4'>
              {Category2.map((y)=>(
              <div class="col-lg-6 bg-light m-2">
                <img src={y.image} width="100%"/>
                <hr></hr></div>
                ))}
        </div>
     
			 	<div class="col-lg-8 bg-light"> 
         {Category2.map((xt)=>(
            <div class="col-lg-12 bg-light">
             {xt.name}<br></br>{xt.Price}<hr></hr>
            </div>
              ))}
         </div>
       </div> */}