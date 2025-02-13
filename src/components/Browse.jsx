import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js"
import usePopularMovies from "../hooks/usePopularMovies.js"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
useNowPlayingMovies()
usePopularMovies()
  
  return (
    <div>
      <Header/>  
      <MainContainer/>
      <SecondaryContainer/>
       {/*
       main container
       - main video 
       -video title , btn

       secondary containers
        - movie list 
        -cards

         */}
    </div>
  )
}

export default Browse
