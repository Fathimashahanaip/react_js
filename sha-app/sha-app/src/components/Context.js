import React, { createContext, useState } from 'react'
import Cardb from './Cardb'
import First from './First'
import Sec from './Sec'
import Tab from './Tab'

export const userContext=createContext() 
function Context() {
    const [c, setc] = useState(0)
    console.log(c)
    const caro=[
        {image:'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'},
        {image:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'},
        {image:'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'}
    ]
    const tabledata=[
      {name:'Shahana',age:23,image:'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'},
      {name:'Finu',age:24,image:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'},
      {name:'Anjana',age:25,image:'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'}
  ]
  return (
    <div>
        <userContext.Provider value={{c,setc,caro,tabledata}}>
            <First/>
            <Sec/>
            <Cardb/>
            <Tab/>
        </userContext.Provider>
    </div>
  )
}

export default Context