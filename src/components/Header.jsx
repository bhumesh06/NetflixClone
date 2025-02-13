import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import {addUser, removeUser} from "../utils/userSlice"
import { useEffect } from "react"
import {NetflixLOGO ,NetflixUserIcon} from "../utils/constants"



const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const dispatch = useDispatch()
  

  const handleSignout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

      navigate("/error")
    });
  }

   //on auth
   useEffect(()=>{

   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email :email , displayName: displayName ,photoURL :photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
       
      }
    });
      return ()=> unSubscribe()
  },[])

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NetflixLOGO} alt="netflixlogo"/>
     {
        user &&  <div className="flex">
        <img className="w-12 h-12" alt="userIcon" src={NetflixUserIcon}></img>
        <button onClick={handleSignout} className="font-bold text-white">(signout)</button>
      </div>
     }
    </div>
  )
}

export default Header
