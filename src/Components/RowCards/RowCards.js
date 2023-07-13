import React, { useEffect, useState } from 'react'
import './RowCards.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'

function RowCards(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
      // console.log(response.data);
    })
  }, [])

  return (
    <div className="row">
      <div className="category">
        <h1>{props.title}</h1>
      </div>
      <div className="movie-slider">
        {
          movies.map((obj)=>{
            return (
              <div className={props.isSmall ? 'small-movie-card' : 'movie-card'}>
                <img src={`${imageUrl+obj.backdrop_path}`} alt="Movie Poster" />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default RowCards