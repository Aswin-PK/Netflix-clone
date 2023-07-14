import React, { useEffect, useState } from 'react'
import './RowCards.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowCards(props) {

  const [movies, setMovies] = useState([])
  const [videoid, setVideoId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
      // console.log(response.data);
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleMovieTrailer = (MovieId) =>{
    // console.log(MovieId);
    axios.get(`movie/${MovieId}/videos?api_key=${API_KEY}`).then(response=>{
      // console.log(response.data);
      if(response.data.results.length!==0) setVideoId(response.data.results[0])
    })
  }

  return (
    <div className="row">

      <div className="category">
        <h1>{props.title}</h1>
      </div>

      <div className="movie-slider">
        {
          movies.map((obj)=>{
            return (
              <div onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? 'small-movie-card' : 'movie-card'}>
                <img src={`${imageUrl+obj.backdrop_path}`} alt="Movie Poster" />
              </div>
            )
          })
        }
      </div>

      { videoid && <YouTube opts={opts} videoId={videoid.key}/> }

    </div> 
  )
}

export default RowCards