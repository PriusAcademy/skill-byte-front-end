interface UserData {
    token:string;
    institute:string;
    email:string;
    id:string
}

export const getUser = ()=>{
    const data:UserData = JSON.parse(localStorage.getItem('profile')!)
    return data
}

export const isAuthorized = ()=>{
    return getUser() != null 
}