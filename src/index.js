import React from 'react'
import ReactDOM from 'react-dom'
import data from "./config"
import Header from './components/Header'
import Biodata from './components/Biodata'
import Project from './components/Project'
import Article from './components/Article'
import Footer from './components/Footer'
import "./styles/_index.scss"

const App = () => {
  return (
    <div id="container">
      <Header/>
      <Biodata data={data}/>
      <Project data={data}/>
      <Article data={data}/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
