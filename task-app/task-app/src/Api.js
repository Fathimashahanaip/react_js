import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Useeffect1 from './Useeffect1'

function Api() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((data)=> {
            console.log(data)
        }
        )

    }, [product])
    
  return (
    <div>Api</div>
  )
}

export default Api