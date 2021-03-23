import React,{useContext,useEffect} from 'react';
import ShelfContext from "../context/shelf/shelfContext";
import ShelfList from "../components/ShelfList/ShelfList"


const Shelf = () => {
    const shelfContext = useContext(ShelfContext);
    useEffect(()=>{
        shelfContext.getAllBooks()
    
        },[])
    
    return (
        <div>
            <ShelfList/>
        </div>
    )
}

export default Shelf
