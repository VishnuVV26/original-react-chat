import React, { useState } from 'react'
import useConversation from '../../store/useConversation'
import useGetConversation from '../../hooks/useGetConversation'
import toast from 'react-hot-toast';
const SearchBar = () => {
  const[search,setSearch]=useState('');
const{setSelectedConversation}=useConversation();
const{conversations}=useGetConversation();

const handleSubmit = (e) => {
  e.preventDefault();
  if (!search) return;
  if (search.length < 3) {
    return toast.error("Search term must be at least 3 characters long");
  }

  const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

  if (conversation) {
    setSelectedConversation(conversation);
    setSearch("");
  } else toast.error("No such user found!");
};

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-transparent border-1 border-black' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white text-2xl'>
        <ion-icon name="search"></ion-icon>
        </button>
    </form>
  )
}

export default SearchBar