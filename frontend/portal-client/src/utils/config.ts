import axios from "axios";

export const isValidUrl = (urlstring:string)=>{
       try {
          return Boolean(new URL(urlstring));
       } catch (error) {
          return false
       } 
}

export const checkifEmail=(urlstring:string)=>{
      const emailregexExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      return emailregexExp.test(urlstring);
}


// export const handleGoogleOauth2 = async ()=>{
//    try {
//       const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_FRONTEND_URL}`)
     
//       window.location.replace(res.data.authorization_url)

//   } catch (err) {
//       console.log("Error logging in", err)
//   }
// }