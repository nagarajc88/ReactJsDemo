export const isAuthenticated = () =>{
    return localStorage.getItem("isLoggedIn");
}

export const getUserInfo = () =>{

}

export const setUserData = (status) =>{
  localStorage.setItem("isLoggedIn", status);
}