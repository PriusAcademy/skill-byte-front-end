import axios from 'axios'


export const API_URL = "https://prius-it-backend.onrender.com"

export const API = axios.create({baseURL:API_URL})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers!.Authorization = `bearer ${JSON.parse(localStorage.getItem('profile')!).token}`
    }
    return req
})