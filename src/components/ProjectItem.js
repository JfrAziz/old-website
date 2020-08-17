import React from 'react'
import tumbnail from "../images/tumbnail.png"
import { FIGithub, FIExternalLink } from '../icons/Icon'

const ProjectItem = ({item}) => {
  const { name, description, repo, url, madeWith = [] } = item
  return (
    <div className="project-item">
      <div className='project-info'>
        <div className="project-name">{name}</div>
        <div className="project-description">{description}</div>
        <div className="project-made-with">
          {
            madeWith.map((item, id) => (
              <span key={id} className="made-with">{item}</span>
            ))
          }
        </div>
        <div className="project-link">
          <a className="link-item" href={repo}><FIGithub/></a>
          <a className="link-item" href={url}><FIExternalLink/></a>
        </div>
      </div>
      <div className="project-image">
        <div className="image-filter"></div>
        <img src={tumbnail} alt="project-img"/>
      </div>
    </div>
  )
}

export default ProjectItem