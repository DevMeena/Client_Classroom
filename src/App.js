import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SignIn from './components/pre-auth-pages/signin'
import SignUp from './components/pre-auth-pages/signup'
import Front from './components/pre-auth-pages/front'
import { signUp } from './actions/users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'

const App = () => {
    const dispatch = useDispatch()

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
        <Route path="/dashboard"> <Dashboard/> </Route>
        </Router>
    )
}

export default App