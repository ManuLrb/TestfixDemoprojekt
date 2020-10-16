<template>
    <Layout>
        <div class="pageLinks">
            <div class="link" v-for = "link in $page.allLinkEntry.edges" :key="link.node.tilte">
                <h2>
                    <a :href="`${link.node.url}`">{{ link.node.title }}</a>
                </h2>

                <div class="content">
                    <div class="img-wrapper">
                        <g-image :src="link.node.image" />
                    </div>

                    <div>{{ link.node.description }}</div>
                </div>

                <div class="link-url">
                    <div>{{ link.node.url }}</div> 
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query {
  allLinkEntry {
    edges {
      node{
        title,
        description,
        image,
        url
      }
    }
  }
}
</page-query>

<script>

export default {
  metaInfo:{
    title: 'vorschau'
  },

  name: 'app',
  data (){
    return{
      links: null
    }
  },    
  methods:{

  }
}
</script>

<style scoped>
.pageLinks{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.link{
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    padding: 0 15px 20px;
    margin: 20px 5px;
    width: 300px;
}

.img-wrapper {
  width: 100%;
  text-align: center;
}

.img-wrapper img {
  height: 200px;
}

.link-url {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>