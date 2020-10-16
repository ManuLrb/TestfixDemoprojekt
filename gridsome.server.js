// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const pages = await require('./src/data/page.json');
    let links = []

    for (const link of pages) {
      const res = await axios.get('http://api.linkpreview.net/?key=213a2cca240e0b3f53f3d3559014e155&q=' + link)

      if (res.data) {
        links.push(res.data)
      }
    }

    const contentType = store.addCollection({
      typeName: "LinkEntry",
      route: "vorschau/:title",
    });

    for(const item of links){
      contentType.addNode({
        title: item.title,
        description: item.description,
        image: item.image,
        url: item.url,
        fields: {
          ...item
        }
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
