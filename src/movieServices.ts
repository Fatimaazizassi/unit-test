import axios from "axios";
import { IMovie } from "./ts/models/Movie";




export const getMovies = async ():Promise<IMovie[]> => {
    try{
    const response = await axios.get<IMovie[]>("...");
    return response.data;
    //return {success: true, movie: response.data, error:""};
    }
    catch(error){
        console.log(error);
        return [];
        //return{ success: false, movie: [], error:JSON.stringify(error)};
    }
};