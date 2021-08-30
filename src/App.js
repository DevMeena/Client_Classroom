import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import SignIn from './components/pre-auth-pages/signin'
import SignUp from './components/pre-auth-pages/signup'
import Front from './components/pre-auth-pages/front'
import { signUp } from './actions/users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import {UserContext} from './UserContext'
import {AuthContext} from './AuthContext'
import Classroom from './components/classroom.js'

const App = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({firstName : "yoyo"}); //turn it to null by default
    const value = useMemo(()=>({user, setUser}), [user, setUser]);
    const [auth, setAuth ] = useState(false);
    const authValue = useMemo(()=>({auth, setAuth}), [auth , setAuth]);
    useEffect(() => {
        dispatch(signUp)
    }, [dispatch])

    return (
        <Router>
            <UserContext.Provider value = {value}>
            <AuthContext.Provider value = {authValue}>

        <Route path="/" exact render={(props) => (
            <>
              <Front/>
            </>
        )} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/classroom" component={Classroom}/>
        </AuthContext.Provider>
        </UserContext.Provider>
        </Router>
    )
}

export default App