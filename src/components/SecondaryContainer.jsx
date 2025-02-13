import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">

     <div className="-mt-40 relative z-10">
     <MovieList title ={"now playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"Popular"} movies ={movies.popularMovies}/>
      <MovieList title ={"m"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"now playing"} movies ={movies.nowPlayingMovies}/>
     
     </div>
     
    </div>
  )
}

export default SecondaryContainer
