import React, { useState } from 'react'
import Pro2 from './Pro2'

function Pro1() {
    const [first, setfirst] = useState([{name:'Iphone',price:200000,image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg'},
    {name:'laptop',price:35000,image:'https://img3.exportersindia.com/product_images/bc-full/2019/7/4635629/laptop-1564400518-5021074.jpeg'},
    {name:'Kurthi',price:1500,image:'https://www.pehnavafashionmart.com/userdata/public/gfx/97768.jpg'},
    {name:'Facewash',price:350,image:'https://www.bigbasket.com/media/uploads/p/l/301673-2_1-garnier-skin-naturals-pure-active-neem-face-wash.jpg'},
  ])
  const [cha, setcha] = useState([{name:'Top',price:2500,image:'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/1/Buyer/19158056/Images/19158056_0_ladies-tops.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3'},
  {name:'Lipstick',price:500,image:'https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg='},
  {name:'Eyeshadow',price:900,image:'https://images.squarespace-cdn.com/content/v1/5ddfade54d009912ef7b3d53/1616513022754-H5J86NLR2PVBLF84I0SK/makwuprevs.jpg'},
  {name:'dupatta',price:400,image:'https://www.nicepng.com/png/detail/15-158844_girl-scarf-png-image-background-portable-network-graphics.png'}
])
  return (
    <div><Pro2 data={first} daa={cha}/>
   
    </div>
  )
}

export default Pro1