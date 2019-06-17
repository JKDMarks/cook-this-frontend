import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import HomePage from './components/HomePage'
import RecipesPage from './components/RecipesPage'

export default class App extends React.Component {
  render() {
    console.log("App props", this.props)
    console.log("App state", this.state)

    return (
      <div className="App">
        <Menu style={{backgroundColor: "#B83329", borderRadius: "0px", borderBottom: "black solid"}}>
          <Menu.Item header className="top" style={{border: "none !important"}}>
            <img className="logo" alt="chef hat" src="https://i.imgur.com/FtclHY5.png"/>
            <div className="title">Cook This!</div>
          </Menu.Item>

          <Menu.Item position="right" style={{alignItems: "center"}}>
            {
              localStorage.token ? (
                <Button negative onClick={() => {delete localStorage.token; this.props.history.push("/")}}>Logout</Button>
              ) : (
                <Button positive onClick={() => this.props.history.push("/login")}>Login</Button>
              )
            }
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/" render={({ history }) => <HomePage history={history} /> } />
          {/* <Route path="/login" render={({ history }) => <LoginPage history={history} />} /> */}
          <Route path="/signup" render={({ history }) => <SignupPage history={history} />} />
          <Route path="/recipes" render={({ history }) => <RecipesPage history={history} />} />
        </Switch>
      </div>
    )
  }
}
