import axios from 'axios'
const API_URL ='http://localhost:1000/api/';
export function getApiNoAuth(){
    return axios.create({
        baseURL:API_URL,
        timeout:10000,
        withCredentials:true,
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type' : 'application/json'
        }
    })
}