const data = {
  name : "Jafar Aziz",
  description : "I am still develop this website. So nothing to see here",
  photo : require("./images/photo.jpg").default,
  project : [
    {
      name : "Markdown Editor",
      description: "Simple realtime markdown editor. You can see what you write on markdown. Made with React JS, marked, and Ace as code editor",
      repo : "https://github.com/JfrAziz/markdown-editor",
      url : "https://markdown.jafaraziz.com",
      image: require("./images/tumbnail.png").default,
      madeWith : [
        "React js",
        "Webpack",
        "Node js"
      ]
    },
  ]
}

export default data