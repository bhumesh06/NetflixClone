import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import {addTrailerVideos} from "../utils/movieSlice"

const useMovieTrailer = (movieId)=>{
    //console.log(movieId)
 
  const dispatch = useDispatch()



  //fetch trailer video
  const getMovieVidoes = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/' +movieId + '/videos?language=en-US', API_OPTIONS)
    const json = await data.json()
  //  console.log(json)

    const filterdata = json.results.filter(video => video.type ==="Trailer")
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    //console.log(trailer)
    dispatch(addTrailerVideos(trailer))
  }

  useEffect(()=>{
    getMovieVidoes()
  },[])
}


export default useMovieTrailer;