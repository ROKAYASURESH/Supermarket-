import React from 'react';
import Details from './Details';
import { Routes, Route, Link } from "react-router-dom";


const Product1=[
    {
        id:1,
        name:"Suspendisse gravide lacus varius",
        Price:"$22.00",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p19-320x320.png"
    },
    {
        id:2,
        name:"Aliquam erat volutpat",
        Price:"$45.00",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p3-1-320x320.png"
    },
    {
        id:3,
        name:"Fusce nec diam et dolor",
        Price:"$45.00",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p13-320x320.png"
    },
    {
        id:4,
        name:"Fusce ullamcorper dapibus",
        Price:"$41.oo",
        image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p16-320x320.png"
    },
]

const Product2=[
    {
        id:1,
        name1:"Marbi pulinar augue lorem",
        price2:"$49.00",
        image2:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p10-1-320x320.png"
    },
    {
        id:2,
        name1:"Cras viverrarhoncus",
        price2:"$75.00",
        image2:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p8-1-320x320.png"
    },
    {
        id:3,
        name1:"Suspendisse volutapt massa",
        price2:"$39.00",
        image2:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p17-1.png"
    },
    {
        id:4,
        name1:"Suspendisses vehicula at duie",
        price2:"$56.00",
        image2:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p15-320x320.png"
    },
]
// DESIGNER FURNITURE
 const Funiture=[
     {
         id:1,
         name:"Tea Table",
         price:"$3,000.00",
         image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/tea-table.png"
     },
     {
        id:2,
        name:"Chair 5",
        price:"$800.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-6-320x320.png"
    },
    {
        id:3,
        name:"Table 1",
        price:"$800.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/table-1-320x320.png"
    },
    {
        id:4,
        name:"Dinning Table",
        price:"$1,900.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/dinning-table-320x320.png"
    },
    {
        id:5,
        name:"Chair 6",
        price:"$t450.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-5-320x320.png"
    },
    {
        id:6,
        name:"Sofa 2",
        price:"$,300",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/sofa-1-320x320.png"
    },
    {
        id:7,
        name:"Chair 1",
        price:"$ 39.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-1-320x320.png"
    },
    {
        id:8,
        name:"Chair2",
        price:"$44.44.55",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-3-320x320.png"
    }
 ]

export default function Home() {
  return (
    <div>
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-12"><img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main5.png" alt="" /></div>
                        <div className="col-lg-12"><img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main8.png" alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-6"><img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main-11.png" alt="" /></div>
                <div className="col-lg-3">
                    <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main7.png" alt="" />
                </div>
            </div>

{/* Product Part */}
            <div className="row my-5">
                {/* Product one */}
                <div className="col-lg-4">
                    <div className="row">
                        {Product1.map((rpp)=>(
                           <div className="col-lg-6">
                                <img className='axa' src={rpp.image1} alt="" width="100%" />
                               <Link to={`details/${rpp.id}`}> <p>{rpp.name}</p></Link>
                               
                                {rpp.Price}
                            </div>
                            
                        ))}
                    </div>
                </div>
                            {/* Middle Image */}
                <div className="col-lg-4">
                    <img className='' src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/p17-1.png" alt="" width="100%" height="100%"/>
                </div>
                {/* Product Two */}
                <div className="col-lg-4">
                <div className="row">
                        {Product2.map((rp)=>(
                           <div className="col-lg-6">
                                <img className=' axa' src={rp.image2} alt="" width="100%" />
                               <div className='text-center'><Link to={`details/${rp.id}`}>{rp.name1}
                                <br />{rp.price2}</Link></div> 
                            </div>   
                        ))}
                    </div>
                </div>
            </div>

{/* Two image */}
            <div className="row my-3">
                {/* first image */}
                <div className="col-lg-8">
                    <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/ruffer-banner.png" alt="" width="100%"/>
                </div>
                {/* Second image */}
                <div className="col-lg-4">
                    <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/banner-8-new.png" alt="" width="100%"/>
                </div>
            </div>
            {/* DESIGNER FURNITURE */}
            <div className="row " >
                <h4>DESIGNER FURNITURE</h4>
                <hr />
                {Funiture.map((r)=>(
                    <div className="col-lg-3 body">
                        <img className=' axb button' src={r.image}alt="" width="100%" />
                       <Link to={`/furniture/${r.id}`}> <p>{r.name}</p></Link>
                        {r.price}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
