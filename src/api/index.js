import axios from 'axios'

const url = 'http://localhost:5000/home'

export const signUp = (newUser) => axios.post(url+"/signup",newUser)
export const signIn = (newUser) => axios.post(url+"/signin",newUser) // with credentials not giving error
export const Dashboard = () => axios.get(url)

