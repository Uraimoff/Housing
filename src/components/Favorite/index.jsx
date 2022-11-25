import React, { useEffect, useState } from 'react'
import HousesCard from '../Card/HousesCard'

const Favorites = () => {
  const [data, setData] = useState({});
  // const request = useRequest();
  // const params = useParams();
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    // params?.id &&
      fetch(`${url}/houses/getAll/favouriteList`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || {});
        });
  }, [url]);
  // console.log(data?.attachments[0]?.imgPath, "fetch data");

  console.log(data, "params data");
  return (
    <>
    <h1>
      Favorites
        {data[0]?.id && data.map((value)=>(
        <HousesCard data={value}/>
        ))}
        <div style={{display: "none"}}>
        {/* <HousesCard/> */}
        </div>
    </h1>
    </>
  )
}

export default Favorites