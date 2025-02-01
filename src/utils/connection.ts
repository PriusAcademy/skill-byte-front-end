import axios from 'axios'
import { getUser } from './isAuthorized'

// "http://localhost:8000/"
// "https://backend-pf3b.onrender.com/"
export const API_URL = "http://localhost:8000/"

export const API = axios.create({baseURL:API_URL})

API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        const user = getUser()
        req.headers!.Authorization = `bearer ${user.token}`
    }
    return req
})

// npm install && npm run prisma:generate && npm run prisma:migrate && npm run build