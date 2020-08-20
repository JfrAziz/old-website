import React from 'react'

const ArticleItem = ({item}) => {
  const { title, excerpt, url } = item
  return (
    <div className="article-item">
      <div className="article-wrapper">
        <div className="top">
          <h3>{title}</h3>
          <div className="article-excerpt">
            <span>{excerpt}</span>
          </div>
        </div>
        <div className="read-more">
          <a href={url}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem