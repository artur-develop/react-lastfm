import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Chart from "./MainContent/Chart";
import SearchTrack from "./MainContent/SearchTrack";
import About from "./MainContent/ChartContent/About";
import NavBar from "./MainContent/NavBar";
import {Toolbar} from "@material-ui/core";

function Main() {
    return (
        <Router>
            <div style={{
                display: "flex",
            }}>
                <NavBar/>
                <main style={{
                    flexGrow: 1,
                    padding: 24,
                }}>
                    <Toolbar/>
                    <Switch>
                        <Route exact path='/' component={Chart}/>
                        <Route path='/searchTrack' component={SearchTrack}/>
                        <Route path={'/about/:artistName'} component={About}/>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Main;