import { useState } from "react"
import Header from "./Header"
import { useRef } from "react"
import { checkValidate } from "../utils/validate"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import {NetflixBgImage} from "../utils/constants"


const Login = () =>{

    const [isSignIn , setisSignIn]= useState(true)
    const [errmsg, seterrmsg] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const togglesignup =()=>{
        setisSignIn(!isSignIn)
    }

    const handlebtnclick =()=>{
        //validate form data step 1)utils validate

      const message =   checkValidate(email.current.value,password.current.value)
        // console.log(email.current.value)
        // console.log(password.current.value)
        seterrmsg(message)
        if(message) return 

        //sign in,signup logic

        if(!isSignIn){
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            //update user
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ...
                const {uid , email , displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email :email , displayName: displayName ,photoURL :photoURL}))
                navigate("/browse")
              }).catch((error) => {
                // An error occurred
                // ...
                seterrmsg(error.message)
              });
              console.log(user)
               
            })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             seterrmsg(errorCode +""+ errorMessage)
             });
        }
        else{
            //sign in logic
           
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate("/browse")
            })
           .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           seterrmsg(errorCode +"-"+ errorMessage)
            });
        }

       
    }


return (
    <>
    <Header/>  
    <div className="absolute">
    <img src={NetflixBgImage} alt="netflixbgimage"/>
    </div> 
    <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-50 bg-black p-4 rounded-md m-auto ">
        <h1 className="font-bold text-2xl text-white m-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignIn && <input ref={name} type="text" placeholder="Name" className="p-2 m-2 bg-black rounded-sm w-full text-white"/>}
        <input ref={email} type="text" placeholder="Email Address" className="p-2 m-2 bg-black rounded-sm w-full text-white "/> 
        <input ref={password} type="password" placeholder="Password" className="p-2 m-2 bg-black rounded-sm w-full text-white"/>
        <p className="text-red-600">{errmsg}</p>
        <button className="p-2 m-2 bg-red-600 text-white rounded-md cursor-pointer w-full hover:bg-red-700" onClick={handlebtnclick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="text-xs text-white p-2 cursor-pointer" onClick={togglesignup}>{isSignIn ? "New to Netflix? Sign up now." : "Already a User? Please Sign In"}</p>
    </form>                
    </>
)
}

export default Login
