import React, { useEffect, useState } from 'react'
import { Youtube_Videos } from '../utils/constants';
import Videos from './Videos';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
    const data = await fetch(Youtube_Videos);
    const json = await data.json();
    // console.log(json.items[0]);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap m-3'>
     { videos.map((vid) =>
        <Link to={"/watch?v="+vid.id} key = {vid.id}>
           <Videos  vidData = {vid}/>
        </Link>)
     }
    </div>
  )
}

export default VideoContainer