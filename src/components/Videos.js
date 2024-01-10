import React from 'react'

const Videos = ({vidData}) => {
    const snippet = vidData?.snippet;
    const statistics = vidData?.statistics;
    // console.log(vidData);
    // const {channelTitle, title, thumbnails} = vidData?.snippet;
    const channelTitle = snippet?.channelTitle;
    const title = snippet?.title;
    const thumbnails = snippet?.thumbnails;
    const viewCount = statistics?.viewCount;

    // console.log(thumbnails?.medium?.url);


  return (
    <div className='m-2 p-1 shadow-md w-72'>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails?.medium?.url}>
        </img>
        <ul>
            <li className='py-2 font-bold text-xl'>{channelTitle}</li>
            <li className='text-xs text-gray-500'>{title}</li>
            <li className='text-xs text-gray-500'>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default Videos