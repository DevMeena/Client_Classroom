import axios from 'axios'

const url = 'http://localhost:5000/home'

export const signUp = (newUser) => axios.post(url+"/signup",newUser)
export const signIn = (User) => axios.post(url+"/signin",User)
export const Dashboard = () => axios.get(url)

