import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Addmovies() {

  let [Title, setTitle] = useState("");
  let [Genre, setGenre] = useState("");
  let [Director, setDirector] = useState("");
  let [ReleaseYear, setReleaseYear] = useState("");
  let [Description, setDescription] = useState("");
  let [Image, setImage] = useState("");

  let navigate =useNavigate();


  function addmoviesdata(e) {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_Base_URL}/api/movies/createmovies`, {
      Title, Genre, Director, ReleaseYear, Description, Image
    }, { withCredentials: true }).then((res) => {
      console.log(res)
      navigate("/Allmovies");
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <div className='min-h-screen pt-[100px] mt-[15px] flex justify-center items-center'>
      <div className='signup-user w-[500px] rounded-md border-[1px] bg-white/20 backdrop-blur-md p-[20px] shadow-2xl'>
        <div className='signup-header w-full h-[80px] flex justify-center items-center mb-4'>
          <h1 className="text-white text-4xl font-bold">
            <span className="text-red-500">.</span> Movie
          </h1>
        </div>
        <div>
          <h2 className='text-[23px] text-white text-center pb-[2px]'>Add New Movie</h2>
          <h4 className='text-[16px] text-center pb-[10px] text-[#c0c8d2]'>Fill the details below</h4>
        </div>
        <div className='w-full'>
          <form onSubmit={addmoviesdata}>
            <label htmlFor="Title" className='text-[16px] text-white'>Title <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Movie Title'
              name='Title'
              value={Title}
              onChange={(e) => { setTitle(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]'
              required
            />
            <label htmlFor="Title" className='text-[16px] text-white'>Image Url <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Movie Title'
              name='Image'
              value={Image}
              onChange={(e) => { setImage(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]'
              required
            />
            <label htmlFor="Genre" className='text-[16px] text-white'>Genre <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Action, Comedy, Drama...'
              name='Genre'
              value={Genre}
              onChange={(e) => { setGenre(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]'
              required
            />
            <label htmlFor="Director" className='text-[16px] text-white'>Director <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Director Name'
              name='Director'
              value={Director}
              onChange={(e) => { setDirector(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]'
              required
            />
            <label htmlFor="ReleaseYear" className='text-[16px] text-white'>Release Year <span className='text-red-500'>*</span></label>
            <input
              type="number"
              placeholder='2024'
              name='ReleaseYear'
              value={ReleaseYear}
              onChange={(e) => { setReleaseYear(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]'
              required
            />
            <label htmlFor="Description" className='text-[16px] text-white'>Description <span className='text-red-500'>*</span></label>
            <textarea
              placeholder='Short description about the movie...'
              name='Description'
              value={Description}
              onChange={(e) => { setDescription(e.target.value) }}
              className='w-full mt-1 bg-[#f3f6fd] min-h-[80px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[15px]'
              required
            ></textarea>
            <button
              type='submit'
              className='block mx-auto px-[20px] py-[12px] bg-[#1F1C2F] text-white rounded-sm text-[16px] cursor-pointer hover:bg-[#29263e] transition-all'>
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addmovies;
