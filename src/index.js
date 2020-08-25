import React from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from "./config"
import Header from './components/Header'
import Biodata from './components/Biodata'
import Project from './components/Project'
import Article from './components/Article'
import Footer from './components/Footer'
import SocialLink from './components/SocialLink'
import "./styles/_index.scss"

AOS.init({
  once: true,
  duration: 500,
  easing: "ease-out-quad"
})

const App = () => {
  return (
    <div id="container">
      <Header/>
      <Biodata data={data}/>
      <Project data={data}/>
      <Article data={data}/>
      <SocialLink/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
