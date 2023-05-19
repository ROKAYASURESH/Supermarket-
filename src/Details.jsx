import React from 'react'
import { useParams } from 'react-router-dom'

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

export default function Details() {
  let {id}=useParams();
 
  const found=Product1.find(element=>element.id==id);
  const foun=Product2.find(element=>element.id==id);
  const fon=Funiture.find(element=>element.id==id);
    
  return (
    <div>
     <img src={found.image1} alt="" /> 

     <img src={foun.image2} alt="" />

     <img src={fon.image} alt="" />
    </div>
    
  )
}
