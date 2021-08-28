import React from 'react'
import SignIn from './components/pre-auth-pages/signin'
import SignUp from './components/pre-auth-pages/signup'
import Front from './components/pre-auth-pages/front'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
        <Route path="/" exact render={(props) => (
            <>
              <Front/>
            </>
        )} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        </Router>
    )
}

export default App