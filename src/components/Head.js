import React, { useEffect, useState } from 'react';
import { Hamburger_button, Youtube_Icon, User_Icon, YouTube_Search_Sugg } from '../utils/constants';
import { toggleMenu } from '../utils/NavSlice';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';
// import { Link } from 'react-router-dom';

const Head = () => {

    const [SearchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const storeCache = useSelector((store)=> store.cache);

    useEffect(()=>{
      console.log(SearchQuery);

      const timer = setTimeout(()=>{
        if(storeCache[SearchQuery]){
          setShowSuggestions(storeCache[SearchQuery]);
        }else {
          getSearchSuggestions()
        }
      },
      300);
      return ()=>{
        clearTimeout(timer);
      }
    },[SearchQuery]);

    const getSearchSuggestions = async()=>{
      const data = await fetch(YouTube_Search_Sugg+SearchQuery);
      const dJson = await data.json();
      console.log(dJson[1]);
      setSuggestions(dJson[1]);
      // console.log(json);
      dispatch(cacheResults({
        [SearchQuery] : dJson[1],
      }))
    }

  const dispatch = useDispatch();
const toggleMenuHangler = ()=>{
  dispatch(toggleMenu())
}

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2 '>
        <div className='flex col-span-1'>
            <img className='h-8 px-2' alt='hamburger' src={Hamburger_button} onClick={()=>toggleMenuHangler()}>
            </img>
            
            <img className='h-8 px-2' alt="Youtube_Logo" src={Youtube_Icon}/>
            
        </div>
        <div>
       
        <div className='col-span-10 px-18'>
          <div>
            <input type='text' placeholder='Search' className='w-3/4 border border-gray-400  p-2 rounded-l-full' value={SearchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)  } >
            </input>
            <button className='bg-gray-100 border border-gray-400 px-5 py-2 rounded-r-full'>🔍
            </button>
          </div>
        </div>
       { showSuggestions && <div className='fixed  bg-white border border-gray-100 w-[28rem] rounded-lg'>
          <ul className='p-2'>
            {suggestions.map((s)=>(<li className='shadow-sm py-2'>🔍 {s}</li>))}
          </ul>
        </div>}
        </div>
        <div className='col-span-1 text-right'>
            <img className='h-8' alt='user' src={User_Icon}>
            </img>
        </div>
    </div>
  )
}

export default Head;