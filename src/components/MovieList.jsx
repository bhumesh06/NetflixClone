import MovieCard from "./MovieCard"

const MovieList = ({title , movies}) => {
    console.log(movies)
  return (
    <div className="px-6  text-red-700 bg-opacity-90"> 
        <h1 className="font-bold text-2xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll"> 
            <div className="flex">
               {
                 movies?.map((movie)=> <MovieCard key={movie.id} poster_path={movie.poster_path}/>)
                
               }    
               {/* <MovieCard poster_path={movies[0].poster_path}/> */}
            </div>
        </div>
    </div>
  )
}

export default MovieList
