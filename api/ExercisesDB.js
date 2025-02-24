import axios from "axios";
import {bodyParts, RapidApi} from "../constants"

const baseURL = "https://exercisedb.p.rapidapi.com"


const apiCall = async(url, params)=>{
    try{
        const options= {
            method:"GET",
            url, params, headers:{
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': RapidApi
            }
        }
        const response = await axios.request(options);
        return response.data
    }catch(err){
        console.log('error', err.message);
        
    }

}

export const fetchExercises = async(bodyParts) =>{
    let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyParts}`)
    return data
}