
import axios from "axios";

const API = {

    getGoogleBooks: function(query){
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="+query
        ); 
    },

    addBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
 
    getAllBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    
    removeBook: function(id) {
        return axios.delete("/api/books/" + id);
    }

};

export default API;