import React, { createContext, useState } from 'react'
import Carou from './Carou'
import First from './First'
import Sec from './Sec'


export const userContext=createContext()
function Context() {
    const [counter, setcounter] = useState(0)
    const [counter1, setcounter1] = useState(0)
    const arr=[{name:'shahana',age:23},
    {name:'finu',age:25}]
    const caro=[
        {image:'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'},
        {image:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'},
        {image:'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'}
    ]


  return (
    <div>
        <userContext.Provider value={{counter,setcounter,counter1,setcounter1,arr,caro}}>
          <First/>  
          <Sec/>
          <Carou/>

        </userContext.Provider>
        
        
    </div>
  )
}

export default Context