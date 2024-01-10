import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRadomStrings, generateRandomWords } from '../utils/helper';
import { addMessage } from '../utils/LiveChatSlice';


const LiveChat = () => {

    const [liveInput, setLiveInput] = useState("");

    const liveMessages = useSelector((store)=>store.chat.messages);
    const dispatch = useDispatch();
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomWords(),
                message: generateRadomStrings(20),
            }))
        },500);
        return ()=> clearInterval(i);
    },[])

  return (
    <>
    <div className='w-full h-[560px] bg-slate-100 border-gray-300 rounded-lg shadow-lg overflow-y-scroll flex flex-col-reverse '>
        <div>{
        liveMessages.map((c,i)=>
        <ChatMessage key={i} name={c.name} message={c.message} />)
        }</div>
    </div>
    <form className=' border-black w-full p-2' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Sahil",
            message: liveInput,
        }))
        setLiveInput("");
    }}>
        <input type="text" placeholder='Say something...' className='mx-2 p-2 w-[70%]' value={liveInput} onChange={(e)=>{
            setLiveInput(e.target.value);
        }}></input>
        <button className='mx-2 p-2 bg-green-100 rounded-lg'>Send</button>
    </form>
    </>
  )
}

export default LiveChat