import axios from "axios";

const PokemonAPI = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})
 
export {
    PokemonAPI,
}