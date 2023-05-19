import React from 'react'
import { useParams } from 'react-router-dom'

// DESIGNER FURNITURE
const Funiture=[
    {
        id:1,
        name:"Tea Table",
        price:"$3,000.00",
        image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/tea-table.png",
        describe:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus",
        describe1:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus PageMaker” – ebenfalls mit Lorem Ipsum."
    },
    {
       id:2,
       name:"Chair 2",
       price:"$800.00",
       image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/chair-6-320x320.png",
       describe:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus",
       describe1:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus PageMaker” – ebenfalls mit Lorem Ipsum."
   },
   {
       id:3,
       name:"Table 1",
       price:"$800.00",
       image:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/table-1-320x320.png",
       describe:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus",
       describe1:"Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von “Letraset”, welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie “Aldus PageMaker” – ebenfalls mit Lorem Ipsum."
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

export default function Furniture() {
    let {id}=useParams();
 
    const fo=Funiture.find(element=>element.id==id);
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <img src={fo.image} alt="" width="100%" />
                </div>
                <div className="col-lg-8">
                    <h1>{fo.name} <br />
                    {fo.price}</h1>
                    <p>{fo.describe}</p>
                    <p>{fo.describe1}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
