function isUtils(){
    const auth = window.localStorage.getItem('token');
    console.log(auth);
    return auth;
}

export default isUtils;