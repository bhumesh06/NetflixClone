
export const checkValidate =(email, password)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(password)

    if(!isEmailValid) return " Email ID is not valid"
    //if(!isPasswordValid) return " password is not valid"   //not workuing

    return null
};