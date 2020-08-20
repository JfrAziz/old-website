const data = {
  name : "Jafar Aziz",
  description : "I am still develop this website. So nothing to see here",
  photo : require("./images/photo.jpg"),
  blog : "https://blog.jafaraziz.com",
  project : [
    {
      name : "Markdown Editor",
      description: "Simple realtime markdown editor. You can see what you write on markdown. Made with React JS, marked, and Ace as code editor",
      repo : "https://github.com/JfrAziz/markdown-editor",
      url : "https://markdown.jafaraziz.com",
      image: require("./images/tumbnail.png"),
      madeWith : [
        "React js",
        "Webpack",
        "Node js"
      ]
    },
  ],
  article: [
    {
      title : "Markdown Blog Menggunakan Gatsby.js",
      excerpt: "Membuat blog menggunakan markdown dengan gatsby js.",
      url : "https://blog.jafaraziz.com/post/Markdown-blog-menggunakan-gatsby-js",
    },
    {
      title : "Menginstall React js Dengan webpack",
      excerpt: "Setup project react js dengan webpack",
      url : "https://blog.jafaraziz.com/post/menginstall-react-js-dengan-webpack",
    }
  ]
}

export default data