import React, { createContext } from 'react'
import Car from './Car'
import Table from './Table'


export const userContext=createContext()
function Context() {

    const caro=[
        {image:'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'},
        {image:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'},
        {image:'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'}
    ]
  return (
    <div>
        <useContext.Provider value={{caro}}>
            <Car/>
            <Table/>

        </useContext.Provider>
    </div>
  )
}

export default Context