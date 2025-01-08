import axios from 'axios'

// "http://localhost:8000/"
// "https://backend-pf3b.onrender.com/"
export const API_URL = "http://localhost:8000/"

export const API = axios.create({baseURL:API_URL})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers!.Authorization = `bearer ${JSON.parse(localStorage.getItem('profile')!).token}`
    }
    return req
})

// npm install && npm run prisma:generate && npm run prisma:migrate && npm run build