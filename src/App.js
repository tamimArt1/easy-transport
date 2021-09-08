import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser';
import Destination from './components/Destination/Destination';
import FinalDestination from './components/FinalDestination/FinalDestination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const SignedInContext = createContext();

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({});
    return (
        <SignedInContext.Provider value={[isSignedIn, setIsSignedIn, user, setUser]}>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/create">
                        <CreateUser></CreateUser>
                    </Route>
                    <PrivateRoute path="/destination/:vehicle">
                        <Destination></Destination>
                    </PrivateRoute>
                    <PrivateRoute path="/finaldest/:vehicle">
                        <FinalDestination></FinalDestination>
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </SignedInContext.Provider>
    );
}

export default App;
