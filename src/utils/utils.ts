export const getTestPageTitle = (title:string)=>{
    return title
    .split("-")
    .join(" ")
    .replace("%26", "&")
    .toUpperCase();
}

export const signOut = ()=>{
    localStorage.removeItem('profile')
}