import React from 'react'

const Biodata = ({data}) => {
  const { name, description, photo } = data
  return (
    <div id="biodata">
      <div id="biodata-description" data-aos="fade-right" data-aos-duration="1000">
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
      <div id="biodata-photo" data-aos="fade-left" data-aos-duration="1000">
        <div id="image-filter"></div>
        <img src={photo.default} alt="biodata-img"/>
      </div>
    </div>
  )
}

export default Biodata