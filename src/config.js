const data = {
  name : "Jafar Aziz",
  description : "I am student at PS STIS. I love to make somethings. Now I am still learning React JS, HTML, Css, and Python.",
  photo : require("./images/photo.jpg"),
  blog : "https://blog.jafaraziz.com",
  project : [
    {
      name : "Markdown Editor",
      description: "Simple realtime markdown editor. You can see what you write on markdown. Made with React JS, marked, and Ace as code editor",
      repo : "https://github.com/JfrAziz/markdown-editor",
      url : "https://markdown.jafaraziz.com",
      image: require("./images/project_1.png"),
      madeWith : [
        "React js",
        "Webpack",
        "Node js"
      ]
    },
    {
      name : "Simple covid 19 Dashboard",
      description: "Dashboard for Covid 19 data, including rate, total confirmed, death, and recovered from all countries in the world. Data from public data API",
      repo : "https://github.com/JfrAziz/covid19-dashboard",
      url : "https://covidsembilanbelas.netlify.app/",
      image: require("./images/project_2.png"),
      madeWith : [
        "React js",
        "Webpack",
        "Node js",
        "Pomber's Covid 19 JSON API"
      ]
    },
  ],
  article: [
    {
      title : "How To Setup Webpack And React JS",
      excerpt: "Setup a React JS Project with webpack manually, without create-react-app.",
      url : "https://blog.jafaraziz.com/post/How-To-Setup-Webpack-And-React-JS",
    },
    {
      title : "Make Header Appear When Scroll Up React JS",
      excerpt: "Make header appear when page scroll up and hidden when scroll down.",
      url : "https://blog.jafaraziz.com/post/Make-Header-Appear-When-Scroll-Up-React-JS",
    },
    {
      title : "Markdown Blog Menggunakan Gatsby.js",
      excerpt: "Membuat blog menggunakan markdown dengan gatsby js.",
      url : "https://blog.jafaraziz.com/post/Markdown-blog-menggunakan-gatsby-js",
    }
  ]
}

export default data