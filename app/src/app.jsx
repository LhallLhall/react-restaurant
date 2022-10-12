import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LoadHome() {
    const [page, setPage ] = useState('home')
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            .then((resp) => setData(resp.data));
    }, [])
    
    if(data.length === 0) {
        return null
    }

    console.log(data)
    console.log(data[0].category.title)
    
    return (
        <>
            <h1>hello</h1>
            <button onClick={() => console.log(data)}>click</button>
        </>
    )
}
export default LoadHome

