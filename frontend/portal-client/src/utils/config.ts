

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