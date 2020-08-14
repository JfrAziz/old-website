import React from 'react'
import ReactDOM from 'react-dom'
import data from "./config"
import "./index.scss"

const App = () => {
  return (
    <div id="container">
      <div id="biodata">
        <div id="biodata-description">
          <div id="intro">
            Hi, i am
          </div>
          <div id="name">
            {data.name}.
          </div>
          <div id="description">
            {data.description}
          </div>
         <div id="get-in-touch-wrapper">
            <a href="https://blog.jafaraziz.com" id="get-in-touch">
              Visit my blog
            </a>
         </div>
        </div>
        <div id="biodata-photo">

        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
