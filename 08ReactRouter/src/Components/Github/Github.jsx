import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] =useState([])
  useEffect( ()=>{
    fetch('https://api.github.com/users/Dsujal08')
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])
  return (
    <div className='text-3xl bg-slate-600 text-white m-3 text-center  '>
      GitHub :  {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={100} />
    </div>
  )
}

export default Github
