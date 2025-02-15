import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"


const VideoBackground = ({movieId}) => {
  const trailervideo = useSelector(store => store.movies?.trailerVideo)
 // console.log(movieId)

  useMovieTrailer(movieId)

  return (
    <div className ="w-screen">
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailervideo?.key +"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>     
    </div>
  )
}

export default VideoBackground
