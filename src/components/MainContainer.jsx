import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
const movies = useSelector(store => store.movies?.nowPlayingMovies)

 if(movies === null) return; //if my movies is not there then return from here
 const mainMovie = movies[0]
 console.log(mainMovie ,"main movies")
   
  const {original_title,overview,id} = mainMovie;
 // console.log(id)

  return (
    <div >
      
      <VideoTitle title ={original_title} overview={overview}/>
      <VideoBackground movieId={id}  />
    </div>
  )
}

export default MainContainer
