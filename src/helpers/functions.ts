export const checkUserLogin = () => {
    const email = localStorage.getItem('email');
    if(!email) return false;
    return true;
};