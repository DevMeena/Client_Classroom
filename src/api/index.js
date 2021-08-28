import axios from 'axios'

const url = 'http://localhost:5000/home'

export const signUp = (newUser) => axios.post(url,newUser)
export const Dashboard = () => axios.get(url)

