import React from 'react'
import { useParams } from 'react-router-dom'

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


export default function PopularProduct() {
    let {id}=useParams();
 
    const found=Product1.find(element=>element.id==id);
  return (
    <div>Details2
        <img src={found.image1} alt="" />
        {found.name}
    </div>
  )
}
