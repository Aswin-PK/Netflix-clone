import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/movie/week?api_key=${API_KEY}&language=us`).then(response=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <section className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}> 
      {/* <img src={`${movie ? imageUrl+movie.backdrop_path : ''}`}  alt="" /> */}
      <div className="content">
        <h1 className="title">{movie ? movie.title: ''}</h1>
        <div className="banner-buttons">
          <button className="button play"><i class="fa-solid fa-play" style={{marginRight: '0.6rem', transform: 'scale(1.3)'}}></i>Play</button>
          <button className="button my-list"><i class="fa-solid fa-add" style={{marginRight: '0.6rem', transform: 'scale(1.3)'}}></i>My List</button>
        </div>
        <p className="description">{movie ? movie.overview: ''}</p>
      </div>
    </section>
  )
}

export default Banner