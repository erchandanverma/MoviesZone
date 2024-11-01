import React, { useState } from 'react';
import Movie from './movie.json';

const MovieZone = () => {
  const movie_data = Movie.movies;
  const [category, setCategory] = useState()
  const filter_data = category
  ? movie_data.filter((movie) => movie.genre.includes(category))
  : movie_data;
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     <div className='text-center'>
     <button className='btn btn-info m-2' onClick={()=>{
        setCategory(undefined)
        }}>All</button>
        <button className='btn btn-danger m-2' onClick={()=>{
        setCategory("Action")
        }}>Action</button>
         <button className='btn btn-success m-2' onClick={()=>{
        setCategory("Adventure")
        }}>Adventure</button>
         <button className='btn btn-warning m-2' onClick={()=>{
        setCategory("Drama")
        }}>Drama</button>
     </div>
      <h1 className="text-4xl text-gray-900 font-bold text-center mb-8">{category} Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filter_data.map((e) => (
          <div
            key={e.id}
            className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105"
          >
            <img
              src={e.image_url}
              alt={e.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{e.title}</h3>
            <p className="text-gray-600">Rating: {e.rating}</p>
            <h4 className="text-gray-900 text-xl">Realise Date: {e.release_year}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieZone;
