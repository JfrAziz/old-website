import React from 'react'
import { FIBook, FIExternalLink } from '../icons/Icon'

const ArticleItem = ({item}) => {
  const { title, excerpt, url } = item
  return (
    <div className="article-item">
      <div className="article-wrapper">
        <div className="article-button">
          <div className="article-logo">
            <FIBook size={40} strokeWidth={1}/>
          </div>
          <a className="read-more" href={url}>
            <FIExternalLink size={24} strokeWidth={1}/>
          </a>    
        </div>
        <div className="article-desc">
          <h3><a href={url}>{title}</a></h3>
          <div className="article-excerpt">
            <span>{excerpt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem