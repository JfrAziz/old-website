import React from 'react'
import { FIGithub, FITwitter } from '../icons/Icon'

const SocialLink = () => {
  const social = [
    {
      name: "github",
      icon: <FIGithub/>,
      url: "https://github.com/JfrAziz"
    },
    {
      name: "twitter",
      icon: <FITwitter/>,
      url: "https://twitter.com/jfraziz"
    },
  ]
  return (
    <div id="social-link">
      <div className="link-container">
        {social.map((item, id) => {
          const {name, icon, url} = item
          return (
            <div key={id} className={`social-item ${name}`}>
              <a href={url}>{icon}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLink