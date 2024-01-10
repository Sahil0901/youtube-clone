import React from 'react'
import Buttons from './Buttons';

const buttonList = ["All","Live","Cricket","Gaming","Music","News","Watched","Watch Later","Podcasts","Soccer","Songs","Cooking"];

const ButtonList = () => {
  return (
    <div className='flex'>{buttonList.map((name, index)=><Buttons key = {index} btnName={name} />)}</div>
  )
}

export default ButtonList;