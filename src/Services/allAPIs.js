import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"


//get all movies


export const getAllMoviesAPI=async(searchKey)=>{
    return await commonAPI('GET',`${SERVER_URL}/movies?search=${searchKey}`)
}

//delete a movies

export const deleteAMovieAPI=async(id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/remove/${id}`)
}

//update a movies

export const updateAMovieAPI=async(id,reqBody)=>{
    return await commonAPI('PUT',`${SERVER_URL}/update/${id}`,reqBody)
}

//add a movies

export const addAMovieAPI=async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/add`,reqBody)
}
