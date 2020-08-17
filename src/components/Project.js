import React from 'react'
import ProjectItem from './ProjectItem'

const Project = ({data}) => {
  const { project } = data
  return (
    <div id="project">
      <h1 id="project-title">Some Projects I've Built</h1>
      <div id="project-container">
        {
          project.map((item, id) => <ProjectItem key={id} item={item}/>)
        }
      </div>
    </div>
  )
}

export default Project