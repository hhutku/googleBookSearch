import axios from "axios";

const API = {

    getGoogleBooks: function(query){
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="+query
        ); 
    }

};

export default API;