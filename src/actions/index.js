const increment = (num) => ({type:"INCREMENT",payload:num});
const decrement = () => ({type:"DECREMENT"});
const login = () => ({type:"LOGIN"});
const logout = () => ({type:"LOGOUT"});

export {
    increment,
    decrement,
    login,
    logout
}