import axios from "axios";

const base_url = "localhost:8000/api/country/"


const getAllCountry = async () =>{
    try{
        const fetchData = await axios.get(base_url+'all');

        return fetchData;

    }catch(error){
        console.log(error)
    }
}


export {getAllCountry}