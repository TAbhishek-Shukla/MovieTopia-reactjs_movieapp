import React, { useContext,useState, createContext,useEffect } from 'react'

const DataContext=createContext();
export const Api_url=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const Context = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
const [movie, setMovie] = useState([]);
const [iserror, setIsError] = useState({show:"false", msg:""});
const [query, setQuery] = useState("titanic");

  const getMovies= async (url)=>{
    setIsLoading(true);
  try{
  const res= await fetch(url);
  const data= await res.json();
  
  if(data.Response ==="True"){
    setIsLoading(false);
    setIsError({
      show:false,
      msg:"",
    })
    setMovie(data.Search);
  }else{
    setIsError({
      show:true,
      msg:data.Error,
    })
  }
  }catch(error){
    console.log(error);
  }
}


   useEffect(() => {
    let timeOut = setTimeout(()=>{
      getMovies(`${Api_url}&s=${query}`);
      console.log("useffect of context: debounce");
    },1000);

return ()=> clearTimeout(timeOut);
  },[query]);

  return (
    <>
    <DataContext.Provider value={{isLoading,iserror,movie,query, setQuery}}>
     {children}
    </DataContext.Provider>
    </>
  )
}
const useGlobalContext=()=>{
  return useContext(DataContext);
}


export {DataContext,Context,useGlobalContext};
