import React from 'react'

const Biodata = ({data}) => {
  const { name, description } = data
  return (
    <div id="biodata">
      <div id="biodata-description">
        <div id="intro">
          Hi, i am
          </div>
        <div id="name">
          {name}.
          </div>
        <div id="description">
          {description}
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
  )
}

export default Biodata