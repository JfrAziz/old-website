import React from 'react'
import ArticleItem from './ArticleItem'

const Article = ({data}) => {
  const { article, blog } = data
  return (
    <div id="article">
      <h1 id="article-heading">Somethings I've wrote</h1>
      <div id="article-container">
        {
          article.map((item, id) => <ArticleItem item={item} key={id}/>)
        }
      </div>
      {
        blog && (
          <div id="check-blog">
            <a href={blog}>VIEW MORE ON MY BLOG</a>
          </div>
        )
      }
    </div>
  )
}

export default Article