import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SignIn from './components/pre-auth-pages/signin'
import SignUp from './components/pre-auth-pages/signup'
import Front from './components/pre-auth-pages/front'
import { signUp, signIn } from './actions/users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import Classroom from './components/classroom.js'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(signIn)
    }, [dispatch])

    useEffect(() => {
        dispatch(signUp)
    }, [dispatch])

    

    return (
        <Router>
        <Route path="/" exact render={(props) => (
            <>
              <Front/>
            </>
        )} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/classroom" component={Classroom}/>
        </Router>
    )
}

export default App