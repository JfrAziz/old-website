import React from 'react'
import ReactDOM from 'react-dom'
import data from "./config"
import Biodata from './components/Biodata'
import Project from './components/Project'
import "./styles/_index.scss"

const App = () => {
  return (
    <div id="container">
      <Biodata data={data}/>
      <Project data={data}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
