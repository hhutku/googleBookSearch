import React,{useEffect} from 'react';
import API from "../utils/API"

const Home = () => {
const bookName="seattle"
    useEffect(()=>{

   API.getGoogleBooks(bookName)
   .then((res)=>{
       console.log(res.data)
   })
    },[])


    return (
        <div>
            home
        </div>
    )
}

export default Home
