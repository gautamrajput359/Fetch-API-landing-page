import React, { useEffect, useState } from 'react'


const Main = () => {
    const [data, setData] = useState([]);

    async function apiData () {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
         const fetched = await response.json()
         setData(fetched)
    }
    useEffect(() => {
        apiData()
    }, [])
  return (
    <div className='mt-[5vh] flex flex-wrap gap-[5vw] mx-6'>
        {data.map((item) => {
            return <div key={item.id} className='h-[30vh] w-[20vw] border-2 border-black text-start overflow-auto px-1'>
                <span></span>
                <p className='font-medium text-base mb-1'>{item.id}. {item.title}</p>
                <p className='text-xs mb-1'>{item.body}</p>
                <p className='text-center'>User Id:{item.userId}</p>
             </div>
        })}
    </div>
  )
}

export default Main
