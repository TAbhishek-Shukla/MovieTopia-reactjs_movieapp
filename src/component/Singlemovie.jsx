import React,{useEffect,useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {Api_url} from '../component/Context'

const Singlemovie = () => {
  const {id}= useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  
  
  
    const getMovies= async (url)=>{
    try{
    const res= await fetch(url);
    const data= await res.json();
    
    if(data.Response ==="True"){
      setIsLoading(false);
      setMovie(data);
    }
    }catch(error){
      console.log(error);
    }
  }
  
  
     useEffect(() => {
      let timeOut = setTimeout(()=>{
        getMovies(`${Api_url}&i=${id}`);
       console.log("useeffect of single page");
      },3000);
  
  return ()=> clearTimeout(timeOut);
    },[id]);
    if(isLoading){
      return(
        <div className='movie-section'>
          <div className="loading">
            Loading...
          </div>

        </div>
      )
    }
  
  return (
    
    <section className='movie-section'>
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="sorry" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink className="back-btn"  to="/">Go BACK</NavLink>
        </div>
      </div>
    </section>
    
  );
}

export default Singlemovie;
