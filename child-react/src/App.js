import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/react">
      <div>我是react页面</div>
      <Link to="/">react根页面</Link>
      <Link to="/about">react的about页面</Link>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          )
        }}
      ></Route>
      <Route
        path="/about"
        render={() => {
          return <h1>我是react的about页面</h1>
        }}
      ></Route>
    </BrowserRouter>
  )
}

export default App
