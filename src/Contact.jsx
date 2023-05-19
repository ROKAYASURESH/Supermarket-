import React from 'react'


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
    },
]

export default function Contact() {
  return (
    <div>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-lg-9"><h4>Contact Us</h4>
                        <form className='m-4'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="Name" placeholder='Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" placeholder="Email"  className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contact No</label>
                            <input type="phone" value="Contact Number" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                            <textarea name='mss' placeholder='message' rows="6" cols="100" className="form-control" id="exampleInputPassword1"></textarea>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                        </form>

                </div>
                <div className="col-lg-3 text-center"><h6>Fashion Store</h6>
                <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc4.png" alt="" width="100%"/>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h6>Products</h6>
                <div className="row">
                        <div className="col-lg-4">
                            {Product1.map((rt)=>(
                                <div className="col-lg-12">
                                    <img src={rt.image1} alt="" width="100%"/>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-8">
                            {Product1.map((tt)=>(
                                <div className="col-lg-12">
                                    <h6>{tt.name}</h6>
                                    <p>{tt.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
